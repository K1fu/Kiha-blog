# Media Card Templates Documentation

This document provides complete templates for all supported file types that can be displayed in the cyberpunk media player.

## Overview

Cards are used to create links that redirect to `player.html` with file parameters. Each card is styled with the cyberpunk theme and displays file information.

### Basic Card Structure

```html
<a href="player.html?file=PATH_TO_FILE&name=DISPLAY_NAME" class="blueprint-card" data-period="prelims" data-subject-code="CODE">
    <div>
        <div class="card-icon">
            <!-- SVG Icon -->
        </div>
        <div class="card-tags">
            <span class="tag tag-period">PERIOD/TYPE</span>
            <span class="tag tag-subject">SUBJECT_CODE</span>
        </div>
        <div class="card-tagline">// TAGLINE</div>
        <h3 class="card-title">Card<br>Title</h3>
        <p style="font-size: 0.85rem; opacity: 0.7; line-height: 1.5; color: rgba(0, 240, 255, 0.8);">Description text here ✧</p>
    </div>
    <div class="card-action">
        Action Text
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <!-- SVG Icon for action -->
        </svg>
    </div>
</a>
```

---

## Audio Files

### Supported Formats
- `.m4a` - MPEG-4 Audio
- `.mp3` - MPEG Audio
- `.wav` - Wave Audio
- `.ogg` - Ogg Vorbis
- `.flac` - FLAC Lossless Audio

### Example: M4A Audio File

```html
<a href="player.html?file=Files/Banana_Ketchup_and_the_Filipino_Video_Phone.m4a&name=Banana_Ketchup" class="blueprint-card" data-period="prelims" data-subject-code="Audio">
    <div>
        <div class="card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1v22M4.22 4.22l15.56 15.56M1 12h22M4.22 19.78L19.78 4.22"/></svg>
        </div>
        <div class="card-tags">
            <span class="tag tag-period">AUDIO</span>
            <span class="tag tag-subject">M4A</span>
        </div>
        <div class="card-tagline">// AUDIO.STREAM</div>
        <h3 class="card-title">Banana Ketchup<br>& Video Phone</h3>
        <p style="font-size: 0.85rem; opacity: 0.7; line-height: 1.5; color: rgba(0, 240, 255, 0.8);">A fascinating exploration of Filipino innovation and pop culture ✧</p>
    </div>
    <div class="card-action">
        Play Audio
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
</a>
```

### Example: MP3 Audio File

```html
<a href="player.html?file=path/to/audio.mp3&name=My_Audio_File" class="blueprint-card" data-period="prelims" data-subject-code="MP3">
    <div>
        <div class="card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18v3H5v-3m8-5v8m-4-8v6m12-1v3h-4v-3M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6z"></path></svg>
        </div>
        <div class="card-tags">
            <span class="tag tag-period">AUDIO</span>
            <span class="tag tag-subject">MP3</span>
        </div>
        <div class="card-tagline">// AUDIO.MP3</div>
        <h3 class="card-title">Music Track<br>Title</h3>
        <p style="font-size: 0.85rem; opacity: 0.7; line-height: 1.5; color: rgba(0, 240, 255, 0.8);">Listen to high-quality audio content ✧</p>
    </div>
    <div class="card-action">
        Play Audio
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
</a>
```

---

## Video Files

### Supported Formats
- `.mp4` - MPEG-4 Video
- `.webm` - WebM Video
- `.ogg` - Ogg Video
- `.avi` - Audio Video Interleave
- `.mov` - MOV Video

### Example: MP4 Video File

```html
<a href="player.html?file=path/to/video.mp4&name=My_Video_File" class="blueprint-card" data-period="prelims" data-subject-code="MP4">
    <div>
        <div class="card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
        </div>
        <div class="card-tags">
            <span class="tag tag-period">VIDEO</span>
            <span class="tag tag-subject">MP4</span>
        </div>
        <div class="card-tagline">// VIDEO.MP4</div>
        <h3 class="card-title">Video<br>Title</h3>
        <p style="font-size: 0.85rem; opacity: 0.7; line-height: 1.5; color: rgba(0, 240, 255, 0.8);">Watch high-definition video content ✧</p>
    </div>
    <div class="card-action">
        Play Video
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
</a>
```

### Example: WebM Video File

```html
<a href="player.html?file=path/to/video.webm&name=WebM_Video" class="blueprint-card" data-period="prelims" data-subject-code="WebM">
    <div>
        <div class="card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><path d="M7 2v20M17 2v20M2 12h20M2 7h20M2 17h20"/></svg>
        </div>
        <div class="card-tags">
            <span class="tag tag-period">VIDEO</span>
            <span class="tag tag-subject">WEBM</span>
        </div>
        <div class="card-tagline">// VIDEO.WEBM</div>
        <h3 class="card-title">WebM Video<br>File</h3>
        <p style="font-size: 0.85rem; opacity: 0.7; line-height: 1.5; color: rgba(0, 240, 255, 0.8);">Stream WebM video format content ✧</p>
    </div>
    <div class="card-action">
        Play Video
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
</a>
```

---

## YouTube Videos

### Format
YouTube links can be in any of these formats:
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`

### Example: YouTube Link

```html
<a href="player.html?file=https://www.youtube.com/watch?v=dQw4w9WgXcQ&name=YouTube_Video" class="blueprint-card" data-period="prelims" data-subject-code="YouTube">
    <div>
        <div class="card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="22" y2="7"/><line x1="2" y1="17" x2="22" y2="17"/></svg>
        </div>
        <div class="card-tags">
            <span class="tag tag-period">VIDEO</span>
            <span class="tag tag-subject">YOUTUBE</span>
        </div>
        <div class="card-tagline">// VIDEO.TUBE</div>
        <h3 class="card-title">YouTube<br>Video</h3>
        <p style="font-size: 0.85rem; opacity: 0.7; line-height: 1.5; color: rgba(0, 240, 255, 0.8);">Watch embedded YouTube content directly ✧</p>
    </div>
    <div class="card-action">
        Play Video
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
</a>
```

### Example: Short YouTube URL

```html
<a href="player.html?file=https://youtu.be/dQw4w9WgXcQ&name=YouTube_Short" class="blueprint-card" data-period="prelims" data-subject-code="YouTube">
    <!-- Same as above -->
</a>
```

---

## PDF Files

### Format
- `.pdf` - Portable Document Format

### Example: PDF Document

```html
<a href="player.html?file=path/to/document.pdf&name=My_PDF_Document" class="blueprint-card" data-period="prelims" data-subject-code="PDF">
    <div>
        <div class="card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="13" x2="12" y2="17"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
        </div>
        <div class="card-tags">
            <span class="tag tag-period">DOCUMENT</span>
            <span class="tag tag-subject">PDF</span>
        </div>
        <div class="card-tagline">// FILE.PDF</div>
        <h3 class="card-title">PDF<br>Document</h3>
        <p style="font-size: 0.85rem; opacity: 0.7; line-height: 1.5; color: rgba(0, 240, 255, 0.8);">View PDF files with the integrated viewer ✧</p>
    </div>
    <div class="card-action">
        View PDF
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
    </div>
</a>
```

### Example: PDF with Custom Path

```html
<a href="player.html?file=Courses/1st year/2ndsemester/Documents/Study_Guide.pdf&name=Study_Guide" class="blueprint-card" data-period="prelims" data-subject-code="Study">
    <!-- Structure same as above, adjust title and description -->
</a>
```

---

## Word Documents

### Supported Formats
- `.docx` - Microsoft Word (Open XML)
- `.doc` - Microsoft Word (Legacy)

### Example: DOCX Document

```html
<a href="player.html?file=path/to/document.docx&name=My_Word_Document" class="blueprint-card" data-period="prelims" data-subject-code="Word">
    <div>
        <div class="card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M8 9h8M8 13h8M8 17h4"/></svg>
        </div>
        <div class="card-tags">
            <span class="tag tag-period">DOCUMENT</span>
            <span class="tag tag-subject">DOCX</span>
        </div>
        <div class="card-tagline">// FILE.DOCX</div>
        <h3 class="card-title">Word<br>Document</h3>
        <p style="font-size: 0.85rem; opacity: 0.7; line-height: 1.5; color: rgba(0, 240, 255, 0.8);">View and interact with Word documents ✧</p>
    </div>
    <div class="card-action">
        View Document
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
    </div>
</a>
```

### Example: DOC Document (Legacy)

```html
<a href="player.html?file=path/to/document.doc&name=Legacy_Word_Document" class="blueprint-card" data-period="prelims" data-subject-code="DOC">
    <!-- Same structure as DOCX -->
</a>
```

---

## Quick Reference: URL Parameters

### Parameter: `file`
- **Purpose**: Path to the media file or URL
- **Format**: Relative paths or full URLs
- **Examples**:
  - `Files/audio.m4a`
  - `path/to/video.mp4`
  - `https://www.youtube.com/watch?v=VIDEO_ID`
  - `path/to/document.pdf`

### Parameter: `name`
- **Purpose**: Display name for the file
- **Format**: Text string, underscores for spaces
- **Examples**:
  - `Banana_Ketchup`
  - `My_Audio_File`
  - `YouTube_Video`
  - `Study_Guide`

---

## Data Attributes

### `data-period`
Determines which category the card belongs to:
- `prelims` - Prelims exams
- `midterms` - Midterms exams
- `prefinals` - Pre-Finals exams
- `finals` - Finals exams

### `data-subject-code`
Used for search filtering and identification:
- Examples: `Audio`, `PDF`, `YouTube`, `MP3`, `Video`, etc.
- Should be unique or descriptive

---

## Card Structure Breakdown

### Icon Section
```html
<div class="card-icon">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <!-- SVG paths here -->
    </svg>
</div>
```

### Tags Section
```html
<div class="card-tags">
    <span class="tag tag-period">TYPE/PERIOD</span>
    <span class="tag tag-subject">CODE</span>
</div>
```

### Tagline (Technical identifier)
```html
<div class="card-tagline">// TAGLINE.HERE</div>
```

### Title
```html
<h3 class="card-title">Title<br>Text</h3>
```

### Description
```html
<p style="font-size: 0.85rem; opacity: 0.7; line-height: 1.5; color: rgba(0, 240, 255, 0.8);">Description text ✧</p>
```

### Action Button
```html
<div class="card-action">
    Action Text
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <!-- SVG paths -->
    </svg>
</div>
```

---

## Styling Notes

### Color Variables Used
- **Primary Blue**: `rgba(0, 240, 255, 0.8)` - Main neon blue
- **Neon Pink**: Used in tags
- **Text Description**: `rgba(0, 240, 255, 0.8)` - Cyan text

### Consistent Style for Description Text
```html
<p style="font-size: 0.85rem; opacity: 0.7; line-height: 1.5; color: rgba(0, 240, 255, 0.8);">Your description ✧</p>
```

### Emoji Suggestion
Use `✧` at the end of descriptions for consistency with the cyberpunk theme

---

## Complete Example Template

Copy and paste this template to create a new card:

```html
<a href="player.html?file=FILEPATH_HERE&name=DISPLAY_NAME_HERE" class="blueprint-card" data-period="prelims" data-subject-code="CODE_HERE">
    <div>
        <div class="card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <!-- Paste SVG paths here -->
            </svg>
        </div>
        <div class="card-tags">
            <span class="tag tag-period">CATEGORY</span>
            <span class="tag tag-subject">CODE</span>
        </div>
        <div class="card-tagline">// TECHNICAL.TAG</div>
        <h3 class="card-title">Card<br>Title</h3>
        <p style="font-size: 0.85rem; opacity: 0.7; line-height: 1.5; color: rgba(0, 240, 255, 0.8);">Your description here ✧</p>
    </div>
    <div class="card-action">
        Action Label
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <!-- Action SVG -->
        </svg>
    </div>
</a>
```

---

## Implementation Guide

1. **Locate the exam-grid section** in `cyberpunk.html` (around line 1080+)
2. **Copy a template** from above that matches your file type
3. **Replace placeholders**:
   - `file=` → Path to your file
   - `name=` → Display name
   - `data-period=` → Category
   - `data-subject-code=` → Code for filtering
   - Card title and description
4. **Adjust icon** if needed
5. **Test the link** by clicking the card

---

## File Type Support Summary

| Extension | Type | Status | Viewer |
|-----------|------|--------|--------|
| .m4a | Audio | ✅ Supported | Native HTML5 |
| .mp3 | Audio | ✅ Supported | Native HTML5 |
| .wav | Audio | ✅ Supported | Native HTML5 |
| .ogg | Audio | ✅ Supported | Native HTML5 |
| .flac | Audio | ✅ Supported | Native HTML5 |
| .mp4 | Video | ✅ Supported | Native HTML5 |
| .webm | Video | ✅ Supported | Native HTML5 |
| .avi | Video | ✅ Supported | Native HTML5 |
| .mov | Video | ✅ Supported | Native HTML5 |
| YouTube | Video | ✅ Supported | iFrame Embed |
| .pdf | Document | ✅ Supported | iFrame Viewer |
| .docx | Document | ✅ Supported | Office Online |
| .doc | Document | ✅ Supported | Office Online |

---

## Notes

- Always include both tags (`tag-period` and `tag-subject`)
- Keep filenames descriptive and use underscores instead of spaces in the `name` parameter
- The emoji `✧` is part of the cyberpunk aesthetic - use it in descriptions
- SVG icons should always have `stroke-width="1.5"` for consistency
- Test file paths before deploying - use relative paths when files are in the same directory or subdirectories
