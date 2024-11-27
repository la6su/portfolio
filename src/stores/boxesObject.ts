import { Vector3 } from 'three'
export interface Box {
  orderIndex: number
  name: string
  position: Vector3
  color: string
  darkColor: string
  imageSrc: string
  androidPath: string
  iosPath: string
  modelPath: string
  modelScale: number
  description?: string
}
export const boxes: Box[] = [
  {
    orderIndex: 0,
    name: 'Zhenya',
    position: new Vector3(-1.5, 0.4, -0.75),
    color: 'rgb(60,117,228)',
    darkColor: 'rgb(22,69,161)',
    imageSrc: '/faces/dzinka-arcane-face.jpg',
    androidPath:
      'intent://arvr.google.com/scene-viewer/1.1?file=https://itsaround.net/models/glb/dzinka_arcane.glb&mode=ar_only#intent://arvr.google.com/scene-viewer/1.1?file=/models/#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;',
    iosPath: '/models/reality/dzinka_arcane.reality',
    modelPath: '/models/glb/dzinka_arcane.glb',
    modelScale: 0.75,
    description: 'Based on the Arcane series',
  },
  {
    orderIndex: 1,
    name: 'Lena',
    position: new Vector3(0.75, 0.4, 0),
    color: 'rgb(255,136,70)',
    darkColor: 'rgb(159,71,38)',
    imageSrc: '/faces/dzinka-rouge-face.jpg',
    androidPath:
      'intent://arvr.google.com/scene-viewer/1.1?file=https://itsaround.net/models/glb/dzinka_rena_rouge.glb&mode=ar_only#intent://arvr.google.com/scene-viewer/1.1?file=/models/#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;',
    iosPath: '/models/reality/dzinka_rena_rouge.reality',
    modelPath: '/models/glb/dzinka_rena_rouge.glb',
    modelScale: 0.75,
    description: 'Based on the Arcane series Lady Bug',
  },
  {
    orderIndex: 2,
    name: 'Dzinka',
    position: new Vector3(1.5, 0.4, -0.75),
    color: 'rgb(122,11,8)',
    darkColor: 'rgb(149,53,30)',
    imageSrc: '/faces/dzinka-base-face.jpg',
    androidPath:
      'intent://arvr.google.com/scene-viewer/1.1?file=https://itsaround.net/models/glb/dzinka_base.glb&mode=ar_only#intent://arvr.google.com/scene-viewer/1.1?file=/models/#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;',
    iosPath: '/models/ios/idle_active_c.usdz',
    modelPath: '/models/glb/dzinka_base.glb',
    modelScale: 0.75,
    description: 'Based on Russian fairy tales',
  },
  {
    orderIndex: 3,
    name: 'Black',
    position: new Vector3(0.75, 0.4, -1.5),
    color: 'rgb(130,188,188)',
    darkColor: 'rgb(56,128,127)',
    imageSrc: '/faces/dzinka-darksoul-face.jpg',
    androidPath:
      'intent://arvr.google.com/scene-viewer/1.1?file=https://itsaround.net/models/glb/dark_souls-transformed.glb&mode=ar_only#intent://arvr.google.com/scene-viewer/1.1?file=/models/#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;',
    iosPath: '/models/reality/dzinka_dark_souls.reality',
    modelPath: '/models/glb/dark_souls-transformed.glb',
    description: 'Based on the game Dark Souls',
    modelScale: 0.75,
  },
  {
    orderIndex: 4,
    name: 'Robulya',
    position: new Vector3(-0.75, 0.4, 0),
    color: '#BC351B',
    darkColor: '#741D11',
    imageSrc: '/faces/dzinka-roblox-face.jpg',
    androidPath:
      'intent://arvr.google.com/scene-viewer/1.1?file=https://itsaround.net/models/glb/dzinka_roblox.glb&mode=ar_only#intent://arvr.google.com/scene-viewer/1.1?file=/models/#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;',
    iosPath: '/models/reality/dzinka_roblox.reality',
    modelPath: '/models/glb/dzinka_roblox.glb',
    modelScale: 0.8,
    description: 'Based on the game Roblox',
  },
  {
    orderIndex: 5,
    name: 'Geysha',
    position: new Vector3(0, 0.4, 0.75),
    color: 'rgb(200,105,57)',
    darkColor: 'rgb(167,69,37)',
    imageSrc: '/faces/dzinka-bride-face.jpg',
    androidPath:
      'intent://arvr.google.com/scene-viewer/1.1?file=https://itsaround.net/models/dzinka_paimon.glb&mode=ar_only#intent://arvr.google.com/scene-viewer/1.1?file=/models/#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;',
    iosPath: '/models/reality/dzinka_corse_bride.reality',
    modelPath: '/models/dzinka_paimon.glb',
    modelScale: 0.75,
    description: 'Based on the game Genshin Impact',
  },
  {
    orderIndex: 6,
    name: 'Injiro',
    position: new Vector3(-0.75, 0.4, -1.5),
    color: '#3CE4E4',
    darkColor: '#38807F',
    imageSrc: '/faces/dzinka-tanjiro-face.jpg',
    androidPath:
      'intent://arvr.google.com/scene-viewer/1.1?file=https://itsaround.net/models/glb/dzinka_tanjiro.glb&mode=ar_only#intent://arvr.google.com/scene-viewer/1.1?file=/models/#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;',
    iosPath: '/models/reality/dzinka_tanjiro_kamado.reality',
    modelPath: '/models/glb/dzinka_tanjiro.glb',
    modelScale: 0.75,
    description: 'Based on the anime Demon Slayer',
  },
  {
    orderIndex: 7,
    name: 'Russomasha',
    position: new Vector3(-1.5, 0.4, 0.75),
    color: 'rgb(187,171,54)',
    darkColor: 'rgb(157,141,39)',
    imageSrc: '/faces/dzinka-wolverine-face.jpg',
    androidPath:
      'intent://arvr.google.com/scene-viewer/1.1?file=https://itsaround.net/models/dzinka_wolverine.glb&mode=ar_only#intent://arvr.google.com/scene-viewer/1.1?file=/models/#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;',
    iosPath: '/models/reality/dzinka_wolverine.reality',
    modelPath: '/models/dzinka_wolverine.glb',
    modelScale: 0.75,
    description: 'Based on the Wolverine universe',
  },
  {
    orderIndex: 8,
    name: 'Bride',
    position: new Vector3(2.25, 0.4, -1.5),
    color: 'rgb(77,93,198)',
    darkColor: 'rgb(52,67,149S)',
    imageSrc: '/faces/bride-face.jpg',
    androidPath:
      'intent://arvr.google.com/scene-viewer/1.1?file=https://itsaround.net/models/dzinka_bride.glb&mode=ar_only#intent://arvr.google.com/scene-viewer/1.1?file=/models/#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;',
    iosPath: '/models/reality/dzinka_corse_bride.reality',
    modelPath: '/models/dzinka_bride.glb',
    modelScale: 0.75,
    description: 'Based on the cartoon Corpse Bride',
  },
  {
    orderIndex: 9,
    name: 'SberKot',
    position: new Vector3(-0.75, 0.4, 1.5),
    color: 'rgb(90,95,132)',
    darkColor: 'rgb(51,56,94)',
    imageSrc: '/faces/sberkot-face.jpg',
    androidPath:
      'intent://arvr.google.com/scene-viewer/1.1?file=https://itsaround.net/models/glb/sbercat_low_idle-transformed.glb&mode=ar_only#intent://arvr.google.com/scene-viewer/1.1?file=/models/#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;;S.browser_fallback_url=https://developers.google.com/ar;end;',
    iosPath: '/models/reality/dzinka_corse_bride.reality',
    modelPath: '/models/glb/sbercat_low_idle-transformed.glb',
    modelScale: 1.24,
    description: 'Sber influencer — Company mascot',
  },
  {
    orderIndex: 10,
    name: 'Oha',
    position: new Vector3(0.75, 0.4, 1.5),
    color: 'rgb(107,97,249)',
    darkColor: 'rgb(121,79,206)',
    imageSrc: '/faces/oha-face.jpg',
    androidPath:
      'intent://arvr.google.com/scene-viewer/1.1?file=https://itsaround.net/models/glb/oha.glb&mode=ar_only#intent://arvr.google.com/scene-viewer/1.1?file=/models/#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;;S.browser_fallback_url=https://developers.google.com/ar;end;',
    iosPath: '/models/ios/oha.usdz',
    modelPath: '/models/glb/oha.glb',
    modelScale: 1.24,
    description: 'Original character from the Kukuzabs universe',
  },
  {
    orderIndex: 11,
    name: 'Aika',
    position: new Vector3(2.25, 0.4, 0),
    color: 'rgb(194,141,205)',
    darkColor: 'rgb(108,81,125)',
    imageSrc: '/faces/aika-face.jpg',
    androidPath:
      'intent://arvr.google.com/scene-viewer/1.1?file=https://itsaround.net/models/glb/aika.glb&mode=ar_only#intent://arvr.google.com/scene-viewer/1.1?file=/models/#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;;S.browser_fallback_url=https://developers.google.com/ar;end;',
    iosPath: '/models/ios/Aika_low_v007.usdz',
    modelPath: '/models/glb/aika.glb',
    modelScale: 1.24,
    description: 'Original character from the Kukuzabs universe',
  },
  {
    orderIndex: 12,
    name: 'Peace',
    position: new Vector3(-2.25, 0.4, 0),
    color: 'rgb(173,169,107)',
    darkColor: 'rgb(101,98,80)',
    imageSrc: '/faces/peace-face.jpg',
    androidPath:
      'intent://arvr.google.com/scene-viewer/1.1?file=https://itsaround.net/models/psx_lowpoly_girl.glb&mode=ar_only#intent://arvr.google.com/scene-viewer/1.1?file=/models/#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;;S.browser_fallback_url=https://developers.google.com/ar;end;',
    iosPath: '/models/ios/Aika_low_v007.usdz',
    modelPath: '/models/psx_lowpoly_girl.glb',
    modelScale: 0.25,
    description: 'Original character from the Kukuzabs universe',
  },
  {
    orderIndex: 13,
    name: 'Squidl',
    position: new Vector3(1.5, 0.4, 0.75),
    color: 'rgb(102,57,141)',
    darkColor: 'rgb(117,88,156)',
    imageSrc: '/faces/squidl-face.jpg',
    androidPath:
      'intent://arvr.google.com/scene-viewer/1.1?file=https://itsaround.net/models/squidl.glb&mode=ar_only#intent://arvr.google.com/scene-viewer/1.1?file=/models/#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;;S.browser_fallback_url=https://developers.google.com/ar;end;',
    iosPath: '/models/ios/Aika_low_v007.usdz',
    modelPath: '/models/squidl.glb',
    modelScale: 12,
    description: 'Original character from the Kukuzabs universe',
  },
  {
    orderIndex: 14,
    name: 'SecBot',
    position: new Vector3(-2.25, 0.4, -1.5),
    color: 'rgb(182,112,106)',
    darkColor: 'rgb(140,67,60)',
    imageSrc: '/faces/secbot-face.jpg',
    androidPath:
      'intent://arvr.google.com/scene-viewer/1.1?file=https://itsaround.net/models/security_bot.glb&mode=ar_only#intent://arvr.google.com/scene-viewer/1.1?file=/models/#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;;S.browser_fallback_url=https://developers.google.com/ar;end;',
    iosPath: '/models/ios/idle_active_c.usdz',
    modelPath: '/models/security_bot.glb',
    modelScale: 0.24,
    description: 'Sber influencer — domclick mascot',
  },
]
