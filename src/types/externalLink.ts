export type Website = {
  id: WebsiteType
  profileRegex: string
  name: string
  placeholder: string
}

export type ExternalLinkUser = {
  url: string
  userId: string
  type: WebsiteType
  updatedAtTime: Date
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
    profileRegex: '^https?://(?:www.)?(?:twitter.com|x.com)(/.*)?$',
    name: 'X',
    placeholder: 'https://x.com/',
  },
  {
    id: 'instagram',
    profileRegex: '^https?://(?:www.)?instagram.com(/.*)?$',
    name: 'Instagram',
    placeholder: 'https://instagram.com/',
  },
  {
    id: 'facebook',
    profileRegex: '^https?://(?:www.)?facebook.com(/.*)?$',
    name: 'Facebook',
    placeholder: 'https://facebook.com/',
  },
  {
    id: 'youtube',
    profileRegex: '^https?://(?:www.)?youtube.com(/.*)?$',
    name: 'Youtube',
    placeholder: 'https://youtube.com/',
  },
  {
    id: 'soundcloud',
    profileRegex: '^https?://(?:www.)?soundcloud.com(/.*)?$',
    name: 'SoundCloud',
    placeholder: 'https://soundcloud.com/',
  },
  {
    id: 'tiktok',
    profileRegex: '^https?://(?:www.)?tiktok.com(/.*)?$',
    name: 'TikTok',
    placeholder: 'https://tiktok.com/',
  },
  {
    id: 'twitch',
    profileRegex: '^https?://(?:www.)?twitch.tv(/.*)?$',
    name: 'Twitch',
    placeholder: 'https://twitch.tv/',
  },
  {
    id: 'discord',
    profileRegex: '^(?:https?://)?(discordapp.com|discord.(com|gg))(/.*)?$',
    name: 'Discord',
    placeholder: 'https://discord.com/',
  },
  {
    id: 'bandcamp',
    profileRegex: '^https?://(?:www.)?bandcamp.com(/.*)?$',
    name: 'bandcamp',
    placeholder: 'https://bandcamp.com/',
  },
  {
    id: 'itunes',
    profileRegex: '^https?://music.apple.com(/.*)?$',
    name: 'Apple Music',
    placeholder: 'https://music.apple.com/',
  },
  {
    id: 'spotify',
    profileRegex: '^https?://open.spotify.com(/.*)?$',
    name: 'Spotify',
    placeholder: 'https://spotify.com/',
  },
  {
    id: 'tidal',
    profileRegex: '^https?://(?:www.)?tidal.com(/.*)?$',
    name: 'Tidal',
    placeholder: 'https://tidal.com/',
  },
  {
    id: 'catalog',
    profileRegex: '^https?://(www\\.)?(beta\\.)?catalog.works(/.*)?$',
    name: 'Catalog',
    placeholder: 'https://catalog.works/',
  },
  {
    id: 'sound',
    profileRegex: '^https?://(www.)?sound.xyz(/.*)?$',
    name: 'Sound',
    placeholder: 'https://sound.xyz/',
  },
  {
    id: 'nina',
    profileRegex: '^https?://(www.)?ninaprotocol.com(/.*)?$',
    name: 'nina',
    placeholder: 'https://ninaprotocol.com/',
  },
  {
    id: 'noizd',
    profileRegex: 'https?://(www.)?noizd.com(/.*)?$',
    name: 'NOIZD',
    placeholder: 'https://noizd.com/',
  },
  {
    id: 'hey',
    profileRegex: '^https?://(www.)?hey.xyz(/.*)?$',
    name: 'Hey',
    placeholder: 'https://hey.xyz/',
  },
  {
    id: 'zora',
    profileRegex: '^https?://(www.)?zora.co(/.*)?$',
    name: 'Zora',
    placeholder: 'https://zora.co/',
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

export const deriveTwitterHandleFromUrl = (url: string) => {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:twitter\.com|x\.com)\/(?:#!\/)?@?([^\/\?]+)/;

  return url.match(regex)?.[1];
};
