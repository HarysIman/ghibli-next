import { NextResponse } from 'next/server';
import { getPosts, createPost } from '@/lib/posts';

export async function GET() {
  return NextResponse.json(getPosts());
}

export async function POST(req) {
  const data = await req.json();
  const post = createPost(data);
  return NextResponse.json(post, { status: 201 });
}
