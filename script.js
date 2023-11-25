let bouton = document.getElementById('bouton')

let notes = document.getElementById('notes')

bouton.addEventListener('click', function () {
    
    // Créer un nouvel élément div pour chaque note
    let newNote = document.createElement('div')

    newNote.innerHTML += 
    `
    <textarea name="note" placeholder="Add Note"></textarea>
    `
    
    // Ajouter la nouvelle note à la liste de notes
    notes.appendChild(newNote)


    // Supprimer la note en cliquant 2 fois dessus
    newNote.addEventListener('dblclick',function () {
        notes.removeChild(newNote)
    })
})



