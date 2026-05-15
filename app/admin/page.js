'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Nav from '@/app/components/Nav';

export default function AdminPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts').then(r => r.json()).then(setPosts);
  }, []);

  async function handleDelete(slug) {
    if (!confirm('Hapus artikel ini?')) return;
    await fetch(`/api/posts/${slug}`, { method: 'DELETE' });
    setPosts(posts.filter(p => p.slug !== slug));
  }

  return (
    <>
      <Nav links={[{ href: '/blog', label: 'Blog' }, { href: '/admin/new', label: '+ Artikel Baru' }]} showLogout />

      <main className="admin-main">
        <div className="container">
          <div className="admin-header">
            <h1 className="section-title">Admin <em>Blog</em></h1>
            <Link href="/admin/new" className="admin-btn-new">+ Artikel Baru</Link>
          </div>

          {posts.length === 0 ? (
            <div className="blog-empty">
              <p>Belum ada artikel. <Link href="/admin/new">Buat sekarang →</Link></p>
            </div>
          ) : (
            <div className="admin-list">
              {posts.map(post => (
                <div key={post.id} className="admin-item">
                  <div className="admin-item-info">
                    <div className="blog-card-date">{post.date}</div>
                    <div className="admin-item-title">{post.title}</div>
                    {post.category && <span className="blog-card-cat">{post.category}</span>}
                  </div>
                  <div className="admin-item-actions">
                    <Link href={`/blog/${post.slug}`} className="admin-btn admin-btn--view">Lihat</Link>
                    <Link href={`/admin/edit/${post.slug}`} className="admin-btn admin-btn--edit">Edit</Link>
                    <button onClick={() => handleDelete(post.slug)} className="admin-btn admin-btn--delete">Hapus</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
