# About

## How does this app work?

All the information is stored in the URL. The app reads the title, artist, chords, and structure all from the URL.

No need to make an account or anything 🤓

## Example Songs

- [Bills, Bills, Bills by Destiny's Child](https://www.ukechords.xyz/?title=Bills,%20Bills,%20Bills&artist=Destiny%27s%20Child&chorus=Am,E,G,D,F,E&verse=Am,E,Am,E,F,E,Dm,E&bridge=&structure=v,v,b,c,v,v,b,c,b,c)
- [Soon May The Wellerman Come, a Sea Shanty](http://ukechords.xyz/?title=Soon+May+The+Wellerman+Come&artist=Sea+Shanty&chorus=F,C,Dm,Am,F,C,Em,Am&verse=Am,Dm,Am,Am,Em,Am&bridge=&structure=v,c)

## Keep Your Own Data

Keep track of your chords somewhere like a Google Spreadsheet, generate a URL using these parameters defined below, and then the app will display these chords for you!

![](/google-sheets.png)

* Example spreadsheet: https://docs.google.com/spreadsheets/d/1PFhLtyTR_KGy9-ZRgxt88HotarKINw5IeaqApKQ0jxA/edit#gid=0

## URL Parameters

### Text

Title and artist show up at the top of the page

- `title=Bills, Bills, Bills` or `title=Soon+May+The+Wellerman+Come`
- `artist=Destiny's Child` or `artist=Sea+Shanty`

### Chords

Chords are defined in a list, separated by commas, with no spaces.
You can define separate sections: chorus, verse, and bridge

- `chorus=Am,E,G,D,F,E` or `chorus=F,C,Dm,Am,F,C,Em,Am`
- `verse=Am,E,Am,E,F,E,Dm,E` or `verse=Am,Dm,Am,Am,Em,Am`
- `bridge=C,F,G`

### Structure

This app defines the structure using single characters:

- `v` is a verse
- `c` is a chorus
- `b` is a bridge

For example:

- `structure=v,v,b,c,v,v,b,c,b,c` or `structure=`v,c`
