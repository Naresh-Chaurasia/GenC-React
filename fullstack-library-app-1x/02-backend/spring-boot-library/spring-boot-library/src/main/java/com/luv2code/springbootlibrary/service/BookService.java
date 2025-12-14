package com.luv2code.springbootlibrary.service;

import com.luv2code.springbootlibrary.entity.Book;

import java.util.List;
import java.util.Optional;

public interface BookService {
    List<Book> findAllBooks();

    Optional<Book> findBookById(Long id);

    Book saveBook(Book book);

    Book updateBook(Long id, Book bookDetails);

    void deleteBook(Long id);
}
