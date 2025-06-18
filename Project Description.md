# Project Synced Slideshow

## Pitch

A web page that users can go to to "visualize" their music with novel, ai generated, visualizations/images.

## Description

The web page is simple as far as the user is concerned. They can sign in. Select their generative ai of choice and *connect* them to us. Then they select their music provider of choice and *connect* them to us. When that's all set up, they can select a playlist to start playing together with a prompt for the visualizations/images. What we do then is:
1. Analyze the music for general sentiment; what's the mood, temperature, genre. All of that stuff.
2. Talk with the ai and generate a set of images suited for the screen size enough for a buffer from the prompt the user gave. Possibly we enrich the prompt with some of the mood stuff from the music analysis.
3. Render the first image in full screen.
4. Apply some effects that fit the music, and **importantly** is synced to it (beat, tempo, etc). Effects can be things like translation, gradual zooming, parallax, lens flare, all effects we can come up with may play an effect in some type of music.
5. At a pace befitting the beat and tempo of the song combined with the "slideshow speed" set by the user, we switch images to the next one, and the next one, changing the effects each time to fit the current music.
6. When the buffer of images is drawing thin, we make a new call to generate more images.

That's the core mechanic of the page. We of course need a bunch of surrounding features like accounts, settings, etc. But that's what the user uses the page for.

## Target Group

Anyone that uses background music and would like mood visuals to go along with it. 
- *I* would use it as a software engineer to keep on a background screen and provide stimuli and power up my music listening experience. As it is now, I do use a lot of youtube videos that does this. The Lo-Fi community on YT is a big one that does exactly this. But I think that the personalization and private nature of this app would be a bonus for those users.
- Cafés, restaurants, elevators, and other public spaces could use this for mood setting along with their background music.
- Gyms are another user that I think could benefit from it.

## Integrations

### Music integrations

Here we want to provide the user with the ability to connect their music experience to the web page. 

#### Integration Requirements

- We need to be able to analyze the music
  - Metadata (title, genre, etc)
  - BPM, tempo, amplitude, etc.
- We need to be able to get real time synced data of the music (since we want to sync to the beat)
- The connections are made to existing user accounts = we don't set up accounts nor pay for the music, we just sync to it

#### Suggested providers

- Spotify (this is the MVP since this is what I use)
- Local machine (play files)
- Local machine through analysis of audio output (is this possible?)
- Jellyfin, Plex, Emby, or other self hosted music services
- Generative AI connections (see [Generative AI Integrations](#generative-ai-integrations)) but for music generation
- Other big music providers such as tidal, apple music, etc etc.
- 7Digital, epidemic sound or whatever it's called that a lot of stores, cafés and restaurants use for DRM approved public playing

### Account Persistance Integration

The user should be able to sign in and save their settings (profile, provider connections, etc) across devices.

#### Integration Requirements

- Must provide a wide array of authorization methods
- Should be cheap since I need to pay for it.
- Must allow for persisting your data
- A bonus is if they have analytics

#### Suggested providers

I work at [LootLocker](https://lootlocker.com/about) that does all of this, but it's targeted towards games. I would still *like* to use if **if it makes sense**. But please suggest alternatives with pros and cons.

### Generative AI Integrations

We want the user to be able to customize the visualizations and be consistently stimulated by novel, high quality, bespoke visuals.

#### Integration Requirements

- Must provide an api that we can connect with
- The connections are made to existing user accounts = we don't set up accounts nor pay for the tokens
- The provider must produce high enough quality visuals (or audio in the case of generated music)

#### Suggested Providers

Here you know better than I do, I will suggest a few that I *know* we should have. But please fill this out.

- Midjourney (this is the mvp since it's the biggest actor)
- Self hosted (I think there's a standard api for self hosted AI generators right? If so, can we add the ability to connect to those? If we can, then this is also mvp as that is the route **I** want to go)
- More big providers

Additionally, please list generative music providers below.

### Monetization Integrations

I want to be able to make money off of this page. And to do that I will need:

A) Monetized ads for non paying users.
B) A subscription payment provider, a way to lock content behind it, and content to lock

#### Integration Requirements

**For non paying customers**
- A reputable ad company
- Able to provide ads in different shapes and sizes since I figure I will want to display ads either as bars (top, bottom, sides), **or** as images mixed in with the generated visuals (every x images is an ad) -- Is that possible? Is it a good idea?

**For paying customers**
- A seamless and universal payment solution
- A way to connect their subscription to the [account provider](#account-persistance-integration).
- Remove ads for paying customers
- Added value for paying (how can I slice the page so that paying makes sense?)