import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Post = {
  id: number
  created_at: string
  title: string
  content: string
  image_url?: string
  author: string
  category: 'blog' | 'action'
  status: 'draft' | 'published'
}

export async function createPost(post: Omit<Post, 'id' | 'created_at'>) {
  return supabase.from('posts').insert([post]).select()
}

export async function getPosts() {
  return supabase
    .from('posts')
    .select('*')
    .eq('status', 'published')
    .order('created_at', { ascending: false })
}

export async function getPostById(id: number) {
  return supabase.from('posts').select('*').eq('id', id).single()
}

export async function updatePost(id: number, updates: Partial<Post>) {
  return supabase.from('posts').update(updates).eq('id', id)
}

export async function deletePost(id: number) {
  return supabase.from('posts').delete().eq('id', id)
}
