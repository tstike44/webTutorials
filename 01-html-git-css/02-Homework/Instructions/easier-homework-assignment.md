# BEFORE GETTING STARTED:

* Go to github.com

* Click the + button in top right

* Select new repository

* Fill out the information (name is HW-Wireframe) and make sure to select initialize repository with a README.

* In Github go to the main page for your new repository

* Click the green button to clone repository.

    * Copy the link

* Go to a terminal and navigate to the folder you want your repository folder to be in.

* run the command ```git clone copiedlink``` where copiedlink is what you copied earlier.

* then change directories into the newly created folder e.g. HW-Wireframe  ```cd HW-Wireframe```

* IMPORTANT: before doing making any files or changes we want to create and switch to a branch called gh-pages. ```git checkout -b gh-pages```

* after this we can work on our homework, or add files and when we are ready to commit we do the following two commands, we repeat this every time we want to save, the message should be descriptive of what you did:
```
git add .
git commit -m "I added files and changed css"
```

## Easier Assignment - Building a Wireframe

### Overview

In this assignment, you will build a web design skeleton using HTML/CSS. Your completed work should look just like the image below:

![Final Layout](Images/Easier-Layout.png)

### Student Notes

* This exercise will challenge most students unfamiliar with HTML/CSS. If you see this task as too simple or if you finish it within three hours, attempt the second homework assignment.

* Just because this is the "easier" assignment does not make it the "quick" one. The process of learning web development is nothing without a serious time investment. While the work may seem strenuous now, you'll find yourself becoming more comfortable with web development as you put more hours into your training.

### Instructions

1. Create a new repository in GitHub and clone it to your machine using the steps at the top of this document and name it `HW-Wireframe`.
2. Create `index.html` and `style.css` files inside your new folder. Then, using the screenshot above, recreate the design using HTML/CSS.
   * All of your HTML should be inside of the `index.html` file.
   * All of your CSS should be inside of the `style.css` file.
3. When you finish the assignment follow the steps at the end of this document to prepare it for Bootcampspot submission.

### Additional Specifications

1. Your HTML should have each of the following sections:
   * Header
   * Nav
   * Aside (With a Heading)
   * Section (With a Heading)
   * Article (With a Heading) contained within the Section
   * Headers contained within the Article
   * Paragraph contained within the Article
2. Your CSS should have styles for each of the following elements:
   * Body
     * font-family: 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
     * color: '#777'
     * background: '#777'
     * width: '960px'
     * font-size: '18px'
   * Header, Nav, Section, Aside, and Footer
     * background: '#ebebeb'
   * Article
     * color: '#ebebeb',
     * background: '#777'
   * h1 and p
     * color: '#777',
     * background: '#ebebeb'
3. The widths of each section should be:
   * section: 495px

### Helpful Hints

* For a refresher on working with Git and GitHub, consult the GitHub Supplemental Guide we sent you in class.
* Don't forget to review these concepts: `float`, `padding`, `margin`, `display`, `overflow`, `clear` and `text-align`.
* This will be a tough assignment. Towards the end of the course, you'll look back to this exercise and realize just how much you've grown as a developer. Stay positive!

- - -

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed.

- - -

### One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

## WHEN FINISHED: Request a Code Review and Submit Homework

* when we are ready to publish our website and share it with others:
```
git push origin gh-pages
```

* Go to your homework repository on github

* Locate the "New pull request" button on the screen, it is below the bar that says "# commits" "# branches" "# releases" "#contributor" on the left hand side.  Click on it.

* ensure the left hand side button says "base: master" and click on the right hand side button and change it to "compare: gh-pages"

* fill out a title and a comment describing what you've done for your homework.

* Click "Create pull request"

* Copy link for pull request and paste into bootcamp spot. (e.g. https://github.com/jtblanche/HW-Wireframe/pull/1)

* Go to your repository's settings and find the github pages link and check that that is working, then paste it into bootcamp spot as well. (e.g. https://jtblanche.github.io/HW-Wireframe)