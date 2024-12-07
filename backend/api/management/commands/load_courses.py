import os
from django.core.management.base import BaseCommand
from api.models import Course

class Command(BaseCommand):
    help = 'Load courses from a predefined data source'

    def handle(self, *args, **kwargs):
        # Define the course data
        data_product = [
            {
                "name": "C++ Beginner Course",
                "image": "/static/images/c++.png",
                "concept": "This course is specifically designed for beginners with little to no prior programming experience with C++.",
                "concept_elaborate": "This course covers essential topics such as variables, data types, operators, control structures, functions, and an introduction to object-oriented programming concepts like classes and objects. Through hands-on exercises and real-world examples, participants will learn how to write, debug, and execute simple C++ programs. By the end of the course, students will have a solid understanding of the basics needed to build efficient and maintainable code, laying the groundwork for more advanced programming techniques and applications.",
                "tutor": "Mario Soto",
                "duration": "3 hours 30 min",
            },
            {
                "name": "C++ Advanced Course",
                "image": "/static/images/c++.png",
                "concept": "This course is the continuation of the beginners course. C++ advanced concepts are covered.",
                "concept_elaborate": "Our Advanced C++ Programming course is tailored for those looking to deepen their expertise in C++ and explore its more sophisticated features. This course delves into advanced topics such as templates, smart pointers, multithreading, lambda expressions, and the Standard Template Library (STL). Additionally, students will gain a solid understanding of design patterns, memory management, and performance optimization techniques. With a focus on real-world applications and complex problem-solving, this course equips learners to develop robust, high-performance software and prepares them for professional roles requiring advanced C++ proficiency.",
                "tutor": "Mario Soto",
                "duration": "4 hours 12 min",
            },
            {
                "name": "Python Beginner Course",
                "image": "/static/images/python.jpg",
                "concept": "This course is specifically designed for beginners with little to no prior programming experience with Python.",
                "concept_elaborate": "This course covers fundamental concepts such as variables, data types, loops, conditionals, and functions, along with an introduction to basic data structures like lists, tuples, and dictionaries. Through practical exercises and engaging projects, participants will develop the skills to write clear and effective Python code. By the end of the course, students will be prepared to tackle real-world programming challenges and take the next steps toward advanced Python development or data analysis.",
                "tutor": "Great Osikhueme",
                "duration": "2 hours 57 min",
            },
            {
                "name": "Python Advanced Course",
                "image": "/static/images/python.jpg",
                "concept": "This course is the continuation of the beginners course. Python advanced concepts are covered.",
                "concept_elaborate": "Our Advanced Python Programming course is designed for experienced developers seeking to master Python’s more sophisticated capabilities. This course explores topics such as decorators, generators, advanced data structures, and asynchronous programming. Participants will also dive into modules like multiprocessing for parallelism, collections for efficient data manipulation, and itertools for functional-style programming. Additionally, the course covers best practices in software design, testing, and debugging, along with an introduction to Python’s application in fields like machine learning, web development, and automation. By the end, students will have the expertise to build scalable, efficient, and maintainable Python applications for complex real-world scenarios.",
                "tutor": "Great Osikhueme",
                "duration": "3 hours 59 min",
            },
            {
                "name": "Java Beginner Course",
                "image": "/static/images/Java-programming.png",
                "concept": "This course is specifically designed for beginners with little to no prior programming experience with Java.",
                "concept_elaborate": "This course covers the core concepts of Java, including variables, data types, control structures, loops, and functions, while also introducing object-oriented programming (OOP) principles like classes, objects, inheritance, and polymorphism. Through hands-on projects and examples, students will learn how to write, compile, and run Java programs, gaining a strong understanding of the language's syntax and structure. By the end of the course, participants will be able to build simple Java applications and have a solid foundation to continue exploring more advanced topics in Java development.",
                "tutor": "Isavella Sevastos",
                "duration": "3 hours 54 min",
            },
            {
                "name": "Java Advanced Course",
                "image": "/static/images/Java-programming.png",
                "concept": "This course is the continuation of the beginners course. Java advanced concepts are covered.",
                "concept_elaborate": "The course covers advanced topics such as multithreading, concurrency, Java’s memory model, and performance optimization. Students will learn about design patterns, Java Streams, Lambda expressions, and the Java 8+ features, including functional programming techniques. Additionally, the course explores Java’s robust libraries and frameworks for building enterprise-level applications, including Spring, Hibernate, and JavaFX. By the end of the course, participants will be equipped to design scalable, high-performance Java applications and contribute to large, sophisticated systems in professional settings.",
                "tutor": "Isavella Sevastos",
                "duration": "4 hours 33 min",
            },
            {
                "name": "HTML/CSS Complete Course",
                "image": "/static/images/html-css.png",
                "concept": "Complete HTML/CSS course that will help web designers and web developers.",
                "concept_elaborate": "Our HTML and CSS for Beginners course is the perfect starting point for anyone interested in web development. This course covers the foundational elements of building websites, starting with HTML structure, tags, and semantic markup. Students will then explore CSS to style web pages, learning about selectors, properties, layouts, and responsive design techniques like Flexbox and CSS Grid. Through hands-on exercises, participants will gain the skills to create visually appealing, accessible, and well-structured web pages. By the end of the course, students will have a solid understanding of HTML and CSS, enabling them to build their own basic websites and take the next steps in web development.",
                "tutor": "Lidia Pena-Lauria",
                "duration": "3 hours 22 min",
            },
            {
                "name": "Javascript Complete Course",
                "image": "/static/images/javascript.png",
                "concept": "Detailed Javascript course for web development.",
                "concept_elaborate": "The course covers key concepts such as variables, data types, operators, control structures, functions, and events. Students will learn how to manipulate the Document Object Model (DOM) to create interactive web pages and enhance user experience. Through practical exercises and projects, participants will develop problem-solving skills and become proficient in writing clean, effective JavaScript code. By the end of the course, students will be able to build dynamic, interactive websites and have a strong foundation to continue learning more advanced JavaScript techniques.",
                "tutor": "Lidia Pena-Lauria",
                "duration": "3 hours 12 min",
            }
        ]


        # Insert the data into the database
        for course_data in data_product:
            course, created = Course.objects.get_or_create(**course_data)
            if created:
                self.stdout.write(self.style.SUCCESS(f"Added course: {course.name}"))
            else:
                self.stdout.write(self.style.WARNING(f"Course already exists: {course.name}"))
