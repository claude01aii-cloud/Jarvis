import React, { useState } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentNote.trim()) return;

    if (editingId !== null) {
      // Update existing note
      setNotes(notes.map(note =>
        note.id === editingId
          ? { ...note, content: currentNote }
          : note
      ));
      setEditingId(null);
    } else {
      // Add new note
      const newNote = {
        id: Date.now(),
        content: currentNote,
        createdAt: new Date().toISOString()
      };
      setNotes([newNote, ...notes]);
    }
    setCurrentNote('');
  };

  const handleEdit = (note) => {
    setCurrentNote(note.content);
    setEditingId(note.id);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setCurrentNote('');
    }
  };

  return (
    <div className="h-full">
      <h2 className="text-xl font-semibold mb-4">Quick Notes</h2>
      
      {/* Note Input Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
          placeholder="Write your note here..."
          className="w-full p-2 border rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          {editingId !== null ? 'Update Note' : 'Add Note'}
        </button>
      </form>

      {/* Notes List */}
      <div className="space-y-3 overflow-y-auto max-h-[300px]">
        {notes.map(note => (
          <div key={note.id} className="bg-gray-50 p-3 rounded-lg">
            <p className="text-gray-800">{note.content}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-gray-500">
                {new Date(note.createdAt).toLocaleDateString()}
              </span>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(note)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(note.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;