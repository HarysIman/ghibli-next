'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/app/components/Nav';

export default function EditPost() {
  const { slug } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ title: '', excerpt: '', content: '', category: '' });

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/posts/${slug}`).then(r => r.json()).then(post => {
      setForm({ title: post.title, excerpt: post.excerpt, content: post.content, category: post.category || '' });
    });
  }, [slug]);

  function handle(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(`/api/posts/${slug}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) router.push('/admin');
    else setLoading(false);
  }

  return (
    <>
      <Nav links={[{ href: '/admin', label: '← Admin' }]} />

      <main className="admin-main">
        <div className="container">
          <h1 className="section-title" style={{ marginBottom: '48px' }}>Edit <em>Artikel</em></h1>

          <form onSubmit={handleSubmit} className="post-form">
            <div className="form-group">
              <label className="form-label">Judul</label>
              <input className="form-input" name="title" value={form.title} onChange={handle} placeholder="Judul artikel..." required />
            </div>
            <div className="form-group">
              <label className="form-label">Kategori</label>
              <input className="form-input" name="category" value={form.category} onChange={handle} placeholder="SEO, Konten, Brand..." />
            </div>
            <div className="form-group">
              <label className="form-label">Ringkasan</label>
              <textarea className="form-textarea form-textarea--short" name="excerpt" value={form.excerpt} onChange={handle} required />
            </div>
            <div className="form-group">
              <label className="form-label">Isi Artikel</label>
              <textarea className="form-textarea form-textarea--tall" name="content" value={form.content} onChange={handle} required />
            </div>
            <div className="form-actions">
              <Link href="/admin" className="admin-btn admin-btn--cancel">Batal</Link>
              <button type="submit" disabled={loading} className="admin-btn admin-btn--save">
                {loading ? 'Menyimpan...' : 'Simpan Perubahan'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
