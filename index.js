let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree) 

function newImage(src, left, bottom) {
    let newImage = document.createElement('img')
    newImage.src = src
    newImage.style.position= 'fixed'
    newImage.style.left = left
    newImage.style.bottom = bottom
    document.body.append(newImage)

    newImage.addEventListener('dblclick', function(){
        newImage.remove()
    })
}


newImage('assets/tree.png', "200px","300px")
newImage('assets/pillar.png', "350px","100px")
newImage('assets/crate.png', "150px", "200px")
newImage('assets/well.png', "500px", "425px")
newImage('assets/sheild.png', "165px", "185px")
newImage('assets/staff.png', "600px", "100px")

let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.style.position = 'fixed'
sword.style.left = '500px'
sword.style.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})




/*
tree = document.createElement('img')
    tree.src = 'assets/tree.png'
    tree.style.position = 'fixed'
    tree.style.left = '200px'
    tree.style.bottom = '300px'
    document.body.append(tree)


    let pillar = document.createElement ('img')
    pillar.src = 'assets/pillar.png'
    pillar.style.position = 'fixed'
    pillar.style.left = '350px'
    pillar.style.botttom = '100px'
    document.body.append(pillar)

    let crate = document.createElement ('img')
    crate.src = 'assets/crate.png'
    crate.style.position = 'fixed'
    crate.style.left = '150px'
    crate.style.bottom = '200px'
    document.body.append(crate)

    let well = document.createElement ('img')
    well.src = 'assets/well.png'
    well.style.position = 'fixed'
    well.style.left = '150px'
    well.style.bottom = '200px'
    document.body.append(well) */