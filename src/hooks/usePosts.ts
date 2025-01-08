'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import type { Post } from '../lib/supabase'

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setPosts(data || [])
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  async function createPost(post: Omit<Post, 'id' | 'created_at'>) {
    try {
      const { data, error } = await supabase
        .from('posts')
        .insert([post])
        .select()

      if (error) throw error
      setPosts([...(data || []), ...posts])
      return { data, error: null }
    } catch (error) {
      console.error('Error creating post:', error)
      return { data: null, error }
    }
  }

  async function updatePost(id: number, updates: Partial<Post>) {
    try {
      const { data, error } = await supabase
        .from('posts')
        .update(updates)
        .eq('id', id)
        .select()

      if (error) throw error
      setPosts(posts.map(post => post.id === id ? { ...post, ...updates } : post))
      return { data, error: null }
    } catch (error) {
      console.error('Error updating post:', error)
      return { data: null, error }
    }
  }

  async function deletePost(id: number) {
    try {
      const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', id)

      if (error) throw error
      setPosts(posts.filter(post => post.id !== id))
      return { error: null }
    } catch (error) {
      console.error('Error deleting post:', error)
      return { error }
    }
  }

  return {
    posts,
    loading,
    createPost,
    updatePost,
    deletePost,
    refresh: fetchPosts,
  }
}
