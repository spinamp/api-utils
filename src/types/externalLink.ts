export type Website = {
  id: WebsiteType
  profileRegex: string
}

export type ExternalLinkUser = {
  url: string
  userId: string
  type: WebsiteType
}

export type WebsiteType =
  | 'twitter'
  | 'instagram'
  | 'facebook'
  | 'youtube'
  | 'soundcloud'
  | 'tiktok'
  | 'twitch'
  | 'discord'
  | 'bandcamp'
  | 'itunes'
  | 'spotify'
  | 'tidal'
  | 'catalog'
  | 'sound'
  | 'nina'
  | 'noizd'
  | 'zora'
  | 'hey' // aka lens
  | 'custom'

export const SupportedWebsites: Website[] = [
  {
    id: 'twitter',
    profileRegex: '^https?://(?:www.)?(?:twitter.com|x.com)/([a-zA-Z0-9_]+)/?$',
  },
  {
    id: 'instagram',
    profileRegex: '^https?://(?:www.)?instagram.com/([a-zA-Z0-9_.]+)/?$',
  },
  {
    id: 'facebook',
    profileRegex: '^https?://(?:www.)?facebook.com/([a-zA-Z0-9.]+)/?$',
  },
  {
    id: 'youtube',
    profileRegex: '^https?://(?:www.)?youtube.com/(?:c/)?([a-zA-Z0-9_-]+)/?$',
  },
  {
    id: 'soundcloud',
    profileRegex: '^https?://(?:www.)?soundcloud.com/([a-zA-Z0-9_-]+)/?$',
  },
  {
    id: 'tiktok',
    profileRegex: '^https?://(?:www.)?tiktok.com/@([a-zA-Z0-9_.-]+)/?$',
  },
  {
    id: 'twitch',
    profileRegex: '^https?://(?:www.)?twitch.tv/([a-zA-Z0-9_]+)/?$',
  },
  {
    id: 'discord',
    profileRegex: '^(?:https?://)?discord.gg(?:/invite)?/([a-zA-Z0-9-]+)/?$',
  },
  {
    id: 'bandcamp',
    profileRegex: '^https?://(?:www.)?bandcamp.com/(?:[a-zA-Z0-9_-]+)/?$',
  },
  {
    id: 'itunes',
    profileRegex:
      '^https?://music.apple.com/(?:us/)?artist/([a-zA-Z0-9_-]+)/?$',
  },
  {
    id: 'spotify',
    profileRegex:
      '^https?://open.spotify.com/(?:artist/|user/)?([a-zA-Z0-9_-]+)/?$',
  },
  {
    id: 'tidal',
    profileRegex:
      '^https?://(?:www.)?tidal.com/(?:browse/artist/|artist/)([a-zA-Z0-9_-]+)/?$',
  },
  {
    id: 'catalog',
    profileRegex: '^https?://(www.)?catalog.works/[a-zA-Z0-9_]+$',
  },
  {
    id: 'sound',
    profileRegex: '^https?://(www.)?sound.xyz/[a-zA-Z0-9_]+$',
  },
  {
    id: 'nina',
    profileRegex: '^https?://(www.)?ninaprotocol.com/[a-zA-Z0-9_]+$',
  },
  {
    id: 'noizd',
    profileRegex: 'https?://(www.)?noizd.com/u/[a-zA-Z0-9_]+$/',
  },
  {
    id: 'hey',
    profileRegex: '^https?://(www.)?hey.xyz/u/[a-zA-Z0-9_]+$/',
  },
  {
    id: 'zora',
    profileRegex: '^https?://(www.)?zora.co/[a-zA-Z0-9_]+$',
  },
]

export const getWebsiteTypeFromUrl = (url: string): WebsiteType => {
  for (const website of SupportedWebsites) {
    const regex = new RegExp(website.profileRegex)
    if (regex.test(url)) {
      return website.id
    }
  }
  return 'custom'
}

export const getSoundUrlFromHandle = (handle: string): string => {
  return `https://www.sound.xyz/${handle}`
}

