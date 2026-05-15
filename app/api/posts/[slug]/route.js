import { NextResponse } from 'next/server';
import { getPost, updatePost, deletePost } from '@/lib/posts';

export async function GET(req, { params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(post);
}

export async function PUT(req, { params }) {
  const { slug } = await params;
  const data = await req.json();
  const post = updatePost(slug, data);
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(post);
}

export async function DELETE(req, { params }) {
  const { slug } = await params;
  deletePost(slug);
  return NextResponse.json({ ok: true });
}
