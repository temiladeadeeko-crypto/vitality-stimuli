# Vitality+ Website Stimuli (2×2)

Open one of the links below to preview a specific condition (participants will NOT see condition labels).


- High Customization / High Transparency → open `start_High_High.html`
- High Customization / Low Transparency → open `start_High_Low.html`
- Low Customization / High Transparency → open `start_Low_High.html`
- Low Customization / Low Transparency → open `start_Low_Low.html`

Hosting (no coding):
1) Go to Netlify → Add new site → Deploy manually.
2) Drag-and-drop the entire folder contents (or the ZIP).
3) Netlify will give you a link. Use start_*.html links for each condition.

Using in Qualtrics (redirect method):
- Assign Embedded Data for c and t (e.g., High/Low).
- Add an End of Survey element → Redirect to: https://YOURHOST/vitality.html?c=${e://Field/Customization}&t=${e://Field/Transparency}
- Then from vitality.html, participants click Continue to Website 2 (blog.html) automatically carrying c/t.

If you prefer 4 separate links (no parameters), use the start_*.html files.


FIG PAGES (for screenshots / appendix):
- fig1_about.html
- fig2_customization_present.html
- fig3_no_customization.html
- fig4_low_transparency.html
- fig5_high_transparency.html

FLOW PAGE (recommended participant experience like your example paper):
- flow.html?c=High&t=High
- flow.html?c=High&t=Low
- flow.html?c=Low&t=High
- flow.html?c=Low&t=Low
