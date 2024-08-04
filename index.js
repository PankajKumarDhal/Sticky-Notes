
// document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById('textarea');
    const addNoteButton = document.querySelector('.bn632-hover.bn27');
    const notesContainer = document.querySelector('.right-container-notes');
    const notesNotAdded = document.querySelector('.notesNotAdded');
    const colorPicker = document.querySelector('.color input');

    let notes = [];

    // Function to display notes on the page
    function renderNotes() {
        notesContainer.innerHTML = "";

        if (notes.length === 0) {
            notesNotAdded.style.display = "flex"; // Show the "No notes" message
        } else {
            notesNotAdded.style.display = "none"; // Hide the "No notes" message
        }

        notes.forEach(function (note, index) {
            const noteElement = document.createElement('div');
            noteElement.style.backgroundColor = note.color;
            noteElement.innerHTML = `
                <p>${note.text}</p>
                <button onclick="deleteNote(${index})">❌</button>
            `;
            notesContainer.appendChild(noteElement);
        });
    }

    // Function to add a new note
    function addNote() {
        const noteText = textarea.value;
        const noteColor = colorPicker.value;

        if (noteText.trim() === "") {
            alert("Please write a note before adding.");
            return;
        }

        const newNote = {
            text: noteText,
            color: noteColor
        };
        notes.push(newNote);

        textarea.value = "";

        renderNotes();
    }

    // Function to delete a note
    window.deleteNote = function (index) {
        notes.splice(index, 1);
        renderNotes();
    };

    addNoteButton.addEventListener('click', addNote);

    renderNotes();
// });
