
// Your Code Here
 async function displayBookName(){
    let response = await fetch("http://localhost:3001/listBooks", {
        method: "GET"
    });

    let books = await response.json();
    console.log(books);
    console.log("is this working?")

    books.forEach(createBookList)
 }



function createBookList(book){
    let rootDiv = document.getElementById('root');
    let rootLi = document.createElement('li');
    rootLi.textContent = book.title;
    rootDiv.append(rootLi);
    let input = document.createElement('input');
    input.type = 'number';
    rootLi.append(input)
    let submit = document.createElement('input');
    submit.type = 'submit'
    submit.value = 'submit'
    rootLi.append(submit)

    submit.addEventListener('click', async ()=>{
        let addBook =  await fetch("http://localhost:3001/updateBook", {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": book.id,
                "quantity": input.value
            }),
           
        });
        let bookStorage = await addBook.json();
        console.log(bookStorage);
    });



}

displayBookName()