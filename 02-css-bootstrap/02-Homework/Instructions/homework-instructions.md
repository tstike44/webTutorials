# BEFORE GETTING STARTED (Do Twice for Bootstrap-Portfolio and Responsive-Portfolio):

* Go to github.com

* Click the + button in top right

* Select new repository

* Fill out the information (name is Bootstrap-Portfolio and Responsive-Portfolio) and make sure to select initialize repository with a README.

* In Github go to the main page for your new repository

* Click the green button to clone repository.

    * Copy the link

* Go to a terminal and navigate to the folder you want your repository folder to be in.

* run the command ```git clone copiedlink``` where copiedlink is what you copied earlier.

* then change directories into the newly created folder e.g. Bootstrap-Portfolio  ```cd Bootstrap-Portfolio``` or for Responsive-Portfolio  ```cd Responsive-Portfolio```

* IMPORTANT: before doing making any files or changes we want to create and switch to a branch called gh-pages. ```git checkout -b gh-pages```

* after this we can work on our homework, or add files and when we are ready to commit we do the following two commands, we repeat this every time we want to save, the message should be descriptive of what you did:
```
git add .
git commit -m "I added files and changed css"
```

## Responsiveness Assignment

### Overview

In this assignment, you'll create two different portfolios. The first will be building
your portfolio layout using the Bootstrap CSS Framework. The second will be enhancing
the portfolio you made last unit with a mobile-responsive layout.

### Before You Begin

* If you opted to do the wireframe (easier) assignment for last homework or if you struggled with the portfolio design, ask a member of the instructional staff to provide you with the solution files. This will provide a starting point for the current assignment. 

* You've learned a ton of material: HTML, CSS, GitHub, GitHub Pages, and Bootstrap. If you feel like you're falling behind, there's no need to panic. You'll have plenty of time to digest and master this material.  Also, set up a 1-on-1 as often as you need it!

* We're diving into JavaScript next unit, and HTML/CSS will start receiving less focus. Still, you'll find that a basic knowledge of HTML/CSS will help you understand JavaScript, especially when we use it to manipulate web pages.

### Submission on BCS

* Please submit the links for both repositories as detailed at the bottom of this document.

### Instructions

1. Create two new GitHub repositories following the steps above and name them `Bootstrap-Portfolio` and `Responsive-Portfolio`, and also follow the steps above to clone them onto your machine.

### Assignment One Instructions (Bootstrap)

1. Inside your `Bootstrap-Portfolio` repo, create `index.html`, `portfolio.html` and `contact.html`.

2. Using Bootstrap, recreate your portfolio site with the following items:

   * A navbar

   * A responsive layout (remember the grid, rows and columns are your friends)

     * eg. On `xs` and `sm` screens, content should take up the entire screen. On `md` and larger screens, you should have some margins on the left and right side of the screen. Check out various sites on your mobile device versus your computer to see this in action!

   * Responsive images

   **BONUS**
   Using Bootstrap, make a sticky footer and use sub-rows and sub-columns on your portfolio site _(Hint: Check out the Bootstrap documentation)_

3. Your Bootstrap solution should minimize use of media queries.

4. Deploy your new Bootstrap-powered portfolio to GitHub Pages.

### Assignment Two Instructions - (No Bootstrap)

1. Copy the contents of `Basic-Portfolio` (your first homework solution) and paste the mentioned files into `Responsive-Portfolio`.

2. Note: Be sure not to include any dot files (e.g. .git, .gitignore) from the `Basic-Portfolio` repo.

3. If you chose the `Wireframe` exercise for your first homework assignment, talk to a TA, who will provide you with a template for your portfolio.

4. Inside your `Responsive-Portfolio` folder, find your `styles.css` file. You will write your media queries at the bottom of `styles.css`.

5. Use three `@media screen` tags, each with one of these `max-width`s: `980px`, `768px` and `640px`.

   * You use `980px` because you never want any of the content to be cut off. Since the desktop layout is about 960px wide, you want the media queries to kick in before your content gets cut off.

   * `768px` is about the width of a tablet and `640px` is about the width of a phone in landscape.

6. Make the layout match the following screenshots:

   * `index.html`: [980px](Images/980-index.jpg), [768px](Images/768-index.jpg), [640px](Images/640-index.jpg)

   * `portfolio.html`: [980px](Images/980-portfolio.jpg), [768px](Images/768-portfolio.jpg), [640px](Images/640-portfolio.jpg)

   * `contact.html`: [980px](Images/980-contact.jpg), [768px](Images/768-contact.jpg), [640px](Images/640-contact.jpg)

7. Make the position of the header `static` (the default positioning) when the screen is `640px` wide. The header design takes up a lot of room; you don't want it to stick to the top of a small screen and leave no room for the rest of your site.

8. Be sure to include the `viewport` tag in all your HTML files, otherwise your media-queries won't function as expected on mobile devices. _(Hint: You won't need to use exact pixels for anything other than the container)_

9. **Protip**: Use the Chrome extensions [Window Resizer](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh) and [Browser Width](https://chrome.google.com/webstore/detail/browser-width/mlnegepkjlccabakompdmbcmdieaideh) to see the browser dimensions in Chrome.

### Submitting Your Work on [BootCampSpot](https://www.bootcampspot-v2.com/)

1. Submit 4 links total following the steps at the bottom of the document for both repositories.

### BONUS

* Incorporate CSS animations in your portfolio. [More info here](http://www.w3schools.com/css/css3_animations.asp).

### Reminder: Submission on BCS

* Please submit 4 links total following the steps at the bottom of the document for both repositories!

- - -

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed.

- - -

### One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

**Good Luck!**

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

* Copy link for pull request and paste into bootcamp spot. (e.g. https://github.com/jtblanche/Bootstrap-Portfolio/pull/1)

* Go to your repository's settings and find the github pages link and check that that is working, then paste it into bootcamp spot as well. (e.g. https://jtblanche.github.io/Bootstrap-Portfolio)