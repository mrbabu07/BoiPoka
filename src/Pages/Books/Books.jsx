import React, { Suspense, useEffect, useState } from "react";

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);

  // useEffect(() => {
  //     fetch("booksData.json")
  //     .then(res => res.json)
  //     .then(data => {
  //         setAllBooks(data)
  //     })
  // })

  const bookPromise = fetch("/booksData.json").then((res) => res.json);
  return (
    <div>
      <h1 className="text-3xl text-center p-6">Books</h1>
      <Suspense fallback={<span>loading....</span>}>
        {<Books bookPromise={bookPromise}></Books>}
      </Suspense>
    </div>
  );
};

export default Books;
