// Creates the panel object to allow it to be manipualted.
const panels = document.querySelectorAll('.panel')

/* Each panel element is placed into an Array, if each panel is clicked, the Event Listener will respond with 123
 */
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        // console.log(123)
        // You can say variable.classlist you can retrieve a list of classes.You can also add methods also
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}