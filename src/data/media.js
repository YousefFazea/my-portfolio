/**
 * Media and Videos Data
 * Academic & Professional Activities of Dr. Yousef Fazea
 * 
 * ============================================================================
 * HOW TO MANAGE VIDEOS:
 * ============================================================================
 * 1. TO ADD A VIDEO:
 *    Add a new object to the `mediaVideos` array below.
 *    Supported fields:
 *      - id: unique string identifier (e.g. 'isncc-2024-talk')
 *      - title: descriptive title of the session / talk (required)
 *      - category: one of 'Conferences' | 'Keynote Speeches' | 'Invited Talks' | 'Other Academic Events'
 *      - year: year of the event (e.g. '2024')
 *      - event: full conference or event name
 *      - location: venue, city, state, country or 'Virtual'
 *      - role: role at event (e.g. 'Keynote Speaker', 'Session Chair', 'Presenter')
 *      - description: brief description of the recording content
 *      - thumbnail: image path via imagePath('filename.jpg') or full image URL.
 *                   If left null or empty, an automatic conference card design is used.
 *      - videoUrl: YouTube video URL (e.g. 'https://www.youtube.com/watch?v=...')
 *                  OR local uploaded MP4 file path (e.g. videoPath('talk.mp4'))
 *                  OR leave as empty string '' if the recording URL is not yet available.
 *      - duration: optional duration label (e.g. '45 min', 'Session Video')
 * 
 * 2. TO EDIT A VIDEO:
 *    Simply edit any of the fields for that entry in the array below.
 * 
 * 3. TO REORDER VIDEOS:
 *    Move the object up or down in `mediaVideos`. The page displays them in this exact order.
 * 
 * 4. TO REMOVE A VIDEO:
 *    Delete or comment out the object from the `mediaVideos` array.
 * ============================================================================
 */

const getBaseUrl = () => {
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) {
    return import.meta.env.BASE_URL.replace(/\/$/, '');
  }
  return '';
};

export const imagePath = (fileName) =>
  `${getBaseUrl()}/images/${encodeURI(fileName)}`;

export const videoPath = (fileName) =>
  `${getBaseUrl()}/videos/${encodeURI(fileName)}`;

export const mediaCategories = [
  'All Videos',
  'Conferences',
  'Keynote Speeches',
  'Invited Talks',
  'Other Academic Events'
];

/**
 * Extracts a YouTube video ID from various standard YouTube URL formats.
 */
export function extractYouTubeId(url) {
  if (!url || typeof url !== 'string') return null;
  const trimmed = url.trim();
  const match = trimmed.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|live)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i
  );
  if (match && match[1]) {
    return match[1];
  }
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }
  return null;
}

/**
 * Analyzes a video URL and returns its playback configuration.
 */
export function parseVideoSource(videoUrl) {
  if (!videoUrl || typeof videoUrl !== 'string' || !videoUrl.trim()) {
    return {
      isAvailable: false,
      type: 'none',
      youtubeId: null,
      embedUrl: null,
      videoSrc: null,
      fallbackThumbnail: null
    };
  }

  const trimmed = videoUrl.trim();
  const ytId = extractYouTubeId(trimmed);

  if (ytId) {
    return {
      isAvailable: true,
      type: 'youtube',
      youtubeId: ytId,
      embedUrl: `https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0`,
      videoSrc: null,
      fallbackThumbnail: `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`
    };
  }

  // Treat as direct MP4 or HTML5 video source
  return {
    isAvailable: true,
    type: 'mp4',
    youtubeId: null,
    embedUrl: null,
    videoSrc: trimmed,
    fallbackThumbnail: null
  };
}

export const mediaVideos = [
  {
    id: 'irict-2021-opening',
    title: 'IRICT 2021 – Opening Session',
    category: 'Conferences',
    year: '2021',
    event: '6th International Conference on Reliable Information and Communication Technology (IRICT 2021)',
    location: 'Virtual Conference',
    role: 'Opening Remarks & Session Chair',
    description:
      'Official opening ceremony and introductory remarks for the 6th International Conference on Reliable Information and Communication Technology (IRICT 2021).',
    thumbnail: imagePath('IRICT-Opening Session.png'),
    videoUrl: videoPath('Conf opening Session.mp4'),
    duration: 'Opening Session'
  },
  {
    id: 'irict-2021-keynote-1',
    title: 'IRICT 2021 – Keynote 1',
    category: 'Keynote Speeches',
    year: '2021',
    event: '6th International Conference on Reliable Information and Communication Technology (IRICT 2021)',
    location: 'Virtual Conference',
    role: 'Keynote Speaker',
    description:
      'Keynote presentation focusing on emerging paradigms in reliable networking, secure computing systems, and communication technologies.',
    thumbnail: imagePath('irict-2021-keynote-1.jpg'),
    videoUrl: videoPath('Keynote 1.mp4'),
    duration: 'Keynote Address'
  },
  {
    id: 'irict-2021-keynote-2',
    title: 'IRICT 2021 – Keynote 2',
    category: 'Keynote Speeches',
    year: '2021',
    event: '6th International Conference on Reliable Information and Communication Technology (IRICT 2021)',
    location: 'Virtual Conference',
    role: 'Keynote Speaker',
    description:
      'Keynote session addressing next-generation computational architectures, Internet of Things integration, and resilient communications.',
    thumbnail: imagePath('irict-2021-keynote-2.jpg'),
    videoUrl: videoPath('Keynote 2.mp4'),
    duration: 'Keynote Address'
  },
  {
    id: 'irict-2021-closing',
    title: 'IRICT 2021 – Closing Session',
    category: 'Other Academic Events',
    year: '2021',
    event: '6th International Conference on Reliable Information and Communication Technology (IRICT 2021)',
    location: 'Virtual Conference',
    role: 'Closing Address & Announcements',
    description:
      'Concluding remarks, conference summary, best paper award announcements, and closing acknowledgments at IRICT 2021.',
    thumbnail: imagePath('IRICT 2021 Closing Session.png'),
    videoUrl: videoPath('Closing Session.mp4'),
    duration: 'Closing Session'
  },
  {
    id: 'uum-2020-alumni-talk',
    title: '2020 Alumni Talk – Universiti Utara Malaysia',
    category: 'Invited Talks',
    year: '2020',
    event: 'Universiti Utara Malaysia (UUM) Alumni Speaker Series',
    location: 'Kedah, Malaysia / Virtual',
    role: 'Invited Alumni Speaker',
    description:
      'Special invited alumni talk sharing academic milestones, doctoral research experiences, publication strategies, and career pathways in computing.',
    thumbnail: imagePath('2020 Alumni Talk.png'),
    videoUrl: videoPath('Alumni Talk Series 1.mp4'),
    duration: 'Invited Talk'
  },
  {
    id: 'isncc-2024-talk',
    title: 'International Symposium on Networks, Computers and Communications (ISNCC 2024), Washington, DC, USA',
    category: 'Conferences',
    year: '2024',
    event: 'International Symposium on Networks, Computers and Communications (ISNCC 2024)',
    location: 'Washington, DC, USA',
    role: 'Presenter & Author',
    description:
      'Scholarly presentation on network security, intelligent communication channels, and advanced computing paradigms at ISNCC 2024.',
    thumbnail: imagePath('ISNCC 2024_ Connected Futures.png'),
    videoUrl: '', // Add YouTube URL or MP4 file path here when ready
    duration: 'Conference Presentation'
  }

];
