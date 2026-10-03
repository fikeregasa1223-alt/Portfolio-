import React, { useState } from 'react';
import { Database, Search, CheckCircle, Mail, AlertCircle } from 'lucide-react';

const BOOKS = [
  { isbn: '978-0134685991', title: 'Effective Java (3rd Edition)', author: 'Joshua Bloch', status: 'Available' },
  { isbn: '978-0132350884', title: 'Clean Code: Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', status: 'Checked Out' },
  { isbn: '978-0596007126', title: 'Head First Design Patterns', author: 'Eric Freeman', status: 'Available' }
];

export const LibrarySystemDemo: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [emailAlertSent, setEmailAlertSent] = useState(false);

  const filteredBooks = BOOKS.filter(
    (b) => b.title.toLowerCase().includes(searchTerm.toLowerCase()) || b.isbn.includes(searchTerm)
  );

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white max-w-xl mx-auto shadow-2xl space-y-5">
      {/* Platform Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-600 flex items-center justify-center font-bold text-lg text-white shadow-md">
            <Database className="w-5 h-5 text-teal-200" />
          </div>
          <div>
            <h4 className="font-bold text-white text-base">Library Management System</h4>
            <p className="text-xs text-teal-400 font-mono">Java Swing + MySQL + Barcode Reader Integration</p>
          </div>
        </div>
        <span className="px-3 py-1 bg-teal-500/10 border border-teal-500/30 rounded-full text-xs text-teal-300 font-semibold">
          10,000+ Books Cataloged
        </span>
      </div>

      {/* Barcode Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Scan ISBN barcode or search book title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-teal-500"
        />
      </div>

      {/* Catalog Results */}
      <div className="space-y-2">
        {filteredBooks.map((book) => (
          <div key={book.isbn} className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center justify-between text-xs">
            <div>
              <h6 className="font-semibold text-slate-100">{book.title}</h6>
              <p className="text-slate-400 text-[11px]">Author: {book.author} • ISBN: {book.isbn}</p>
            </div>

            <div>
              {book.status === 'Available' ? (
                <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-semibold rounded text-[10px]">
                  Available
                </span>
              ) : (
                <button
                  onClick={() => setEmailAlertSent(true)}
                  className="px-2.5 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-semibold rounded text-[10px] flex items-center gap-1"
                >
                  <Mail className="w-3 h-3" />
                  <span>Send Overdue Alert</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {emailAlertSent && (
        <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-300 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Automated JavaMail overdue alert dispatched to borrower's email queue!</span>
        </div>
      )}
    </div>
  );
};
