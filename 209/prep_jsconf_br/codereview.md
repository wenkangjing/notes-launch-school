
```txt
Hi Jamie,

I can't tell you whether this would pass the assessment or not; it is quite a different project from the assessment, and I don't currently grade assessments. What I can do is point out issues that the instructor may or may not raise as part of the assessment. I may be tougher than the instructor -- I generally pretty picky in code reviews. However, the instructor may be even pickier.

First impressions are good. The page renders nicely, and looks professional. Well done!

Your HTML fails one W3C check:

Error: The frameborder attribute on the iframe element is obsolete. Use CSS instead.

From line 330, column 9; to line 330, column 353

<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.274411172945!2d-…C3%A9+Fortaleza!5e0!3m2!1sen!2sau!4v1478495796581" frameborder="0" style="border:0" allowfullscreen></iframe>

Your CSS fails one W3C check:

42  .clearfix::after    Value Error : visibility none is not a visibility value : none 
Some parts of your text appear to be boldface, while the corresponding elements in the official page are not. For instance, the navigation bar is bold in your page, non-bold on the official page. The various headings also seem to suffer from too much bold.

You misspelled Brazil as Brizil in the header.

The official page appears to use a different font for the letter J in the header.

Your date and location in the header are notably smaller than the official version.

On the official page, there is a background color change on hover events over the green buttons; this effect is missing from yours.

The spacing between the 3 lines of the first section below the header are noticeably different.

Nicely done on capturing the hover events over the speakers.

John Paul appears to have the wrong text in his hover bio (I think it is Bernard Kobos bio). It's completely different on the two pages, and in yours, the text gets cut off at the bottom. Bernard Kobos bio gets cut off as well.

The margins (or padding) on the Schedule section are noticeably different. Your fonts in this section are noticeably smaller.

In the schedule section, the images on the right are links. Your images are not.

In the 9:00 session of the Schedule, the session title has the wrong color.

In the location section, the map should span the entire width of the page. Yours does not.

I think the Call for Papers section uses a different font color than the rest of the page -- it is much lighter. Your font in this section looks like the rest of the page.

The margins (or padding) in the Sponsors section are noticeably different.

In the sponsors Platinum section, there should be 3 logos in a single line. You have 2 on one line, 1 on the second.

There are 4 team members listed in the footer whose names are links. Those links should be decorated with underlines when hovered. Yours do not.

Your footer image is noticeably taller than the official version.

You misspelled Gold in the Gold section.

By the way, your repo is getting rather sizable. At this stage, you should be putting each project in a separate repo; this way, the reviewer doesn't have to download everything you've ever done in LS.

Nice to see that you caught the fact that the speakers reformat to 2 per line when the browser is around 960px.

When the window width is less than about 920 pixels, the navigation bar should wrap to two lines on a white background. Your navigation bar wraps, but the second line is displayed on top of the header image.

Nice to see that you caught the disappearing navigation bar and Sessions formatting when the width got down to around 650px.

At some point between 600 and 650px, the live site switches back to two speakers per row after dropping to one speaker per row. It drops back to one speaker per row at around 600 pixels. Your page collapse to one speaker per row at around 650px and stays there.

Overall, I think you did pretty well. I had to look pretty closely at things side-by-side to see the differences.

If you have questions or concerns about this review, please let me know.

Pete
```