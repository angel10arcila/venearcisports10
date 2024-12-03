class StreamPlayer {

  constructor() {

    this.videoElement = document.getElementById('mainPlayer');

    this.streamList = document.getElementById('streamList');

    this.currentStream = null;

    this.streams = [
      
      {

        id: 1,

        title: 'Mlb 🇺🇸',

        url: 'https://linear-843.frequency.stream/mt/studio/843/hls/master/playlist.m3u8',

        isLive: true

      },
      
      

      {

        id: 2,

        title: 'Stadium 🇺🇸',

        url: 'https://bcovlive-a.akamaihd.net/77f552c75f084189959f8a7e54d87700/us-east-1/5994000126001/playlist.m3u8',

        isLive: true

      },
      

      {

        id: 3,

        title: 'Red Bulltv 🇺🇸',

        url: 'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8?p',

        isLive: true

      },

      {

        id: 4,

        title: 'Ewnt 🇮🇹',

        url: 'https://1654596987.rsc.cdn77.org:443/1654596987/tracks-v1a1/mono.m3u8?p',

        isLive: true

      },

      {

        id: 5,

        title: 'TvFamilia 🇻🇪',

        url: 'https://59d39900ebfb8.streamlock.net/tvfamilia_480p/tvfamilia_480p/playlist.m3u8?p',

        isLive: true

      },
      
      


      {

        id: 6,

        title: 'Venevisión 🇻🇪',

        url: 'https://vod2live.univtec.com/manifest/4c41c0d8-e2e4-43cc-bd43-79afe715e1b3.m3u8',

        isLive: true

      },

      {

        id: 4,

        title: 'Venevisión 🇻🇪',

        url: 'https://vod2live.univtec.com/manifest/4c41c0d8-e2e4-43cc-bd43-79afe715e1b3.m3u8',

        isLive: true

      },
      

      {

        id: 7,

        title: 'Viptv 🇻🇪',

        url: 'https://ott3.streann.com/loadbalancer/services/public/channels/5d23d5882cdce61dae029fd8/playlist.m3u8?p',

        isLive: true

      },
      
      

      {

        id: 8,

        title: 'Mda TV 🇻🇪',

        url: 'https://vcp.myplaytv.com/mdatv/mdatv/playlist.m3u8',

        isLive: true

      },
      
      

      {

        id: 9,

        title: 'Amc 🇺🇸',

        url: 'https://d38fxgxhpllpfu.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-4w47pf3x50sko/playlist.m3u8?p',

        isLive: true

      },
      
      

      {

        id: 10,

        title: 'Star Tve 🇪🇸',

        url: 'https://rtvelivestream.akamaized.net/rtvesec/int/star_main_dvr.m3u8',

        isLive: true

      },
      
       {

        id: 11,

        title: 'Tve 🇪🇸',

        url: 'https://rtvelivestream-rtveplayplus.rtve.es/rtvesec/int/tvei_ame_main_dvr_576.m3u8',

        isLive: true

      },
      
    

      {

        id: 12,

        title: 'Canal - I 🇻🇪',

        url: 'https://vcp10.myplaytv.com/canali/canali/.m3u8',

        isLive: true

      },
      
      

      {

        id: 13,

        title: 'Canela Deportes 🇺🇸',

        url: 'https://stream.ads.ottera.tv/playlist.m3u8?network_id=2013',

        isLive: true

      },
      
      

      {

        id: 14,

        title: 'Televisa Novelas 🇲🇽',

        url: 'https://televisa-televisa-1-it.samsung.wurl.tv/playlist.m3u8?p',

        isLive: true

      },
      
      

      {

        id: 15,

        title: 'Dw en español 🇩🇪',

        url: 'https://dwamdstream104.akamaized.net/hls/live/2015530/dwstream104/index.m3u8?p',

        isLive: true

      },
      
      

      {

        id: 16,

        title: 'Movie fé 🇻🇪',

        url: 'https://vcp.myplaytv.com/moviefe/moviefe/playlist.m3u8',

        isLive: true

      },
      
      

      {

        id: 17,

        title: 'Televen 🇻🇪',

        url: 'https://mediablocks-ve.global.ssl.fastly.net/10255/live/hls/televen/index.m3u8?bpkio_serviceid=8d9766a69b764fefae1d45b89dc1e565&hdnts=data%3Dip%3D201.248.226.251%2Cid%3DTLV-GUEST%2Cpid%3D255%2Cdid%3DN%2FA%2Csid%3DWBS%7Eacl%3D%2F10255%2Flive%2Fhls%2Fteleven%2F*%7Eexp%3D1733260614%7Ehmac%3D2ea140684b7c08c2e11c0ec9ac8bb741bebef26d35e205c8558d6a11586a9e4b&AV_CATEGORY=IAB1-7&AVC_TIME=14-16-54&AV_CONTENT_TYPE=LIVE&AV_UPAL=AQzzBGQEWUykxX2fSZf3N8xjDVrpA2WinD2vqGjn7m0aB1JSVtNYGgJveAm7pSNw-AgHv2qEhVJZSZ7DCd20f9jyoHvMsQifOYSRQ1vfba2Wgz9U9HZ94Ay790n5mkiFn56ChW2TMM61FSBd7GvHzkFZAHFylbKPsr1BCURRClCBuyC0uDT_EweAIWQTxxhrue9m_4pA7qwYkmjzj-LL2N6Yi4Da7faIjZ23dNpiT9c_3WIWxFxBqf9RzQzCqB9ybA7WujJ5TeGnguBDiY84l-VrAUxJ_wxjD6_9jRmLaxfvJCW5wyYyxlHjJq-UYH3cAk7fPZzWkCE1RL3E7b4bfyLRAcEt0etNsg2R6oOva3u1xgJiuTodYg5buURdGjQfx8VYwIaDYOhZiRATrq5W5-JT095mttPZm3MoJbT_f-0LJm8EAEmCztqoNFLU_OEgoSNKc99GzRry-9qXmKbGt_wk5YgnKQs8FIGG_63baJz5zEvXFa3XmuoTYlzpiI4FqoPHfWnonFK5jTaooRDV88KTaJV4mZ3Tun20xcykzcam9o6euIJRzsPeFEgWOG0_OkdV_LNbaRVOIYIsBbzvWeRg-A6swyaQHIU1QkTsCJ6F2IbLHsuG8KEynIagdUuaqlK_jPKGeYUJd4wq7v3iMbxIw7fu4WO-xwfXuXH7iXMdnoBPJVwBqFwMrGMSv9cg5KjUv50TFAsU3JOykfBovozaXfQRwBZjGMXrM3nEA-bPU5U25ipJhNNWnJ6CH02HpXpkmUpprh8IgglkSK5cD-s93o0Zzb866zP9_rvSPg6BKmWPpPHvszlQNSwWD6URClq_rTTeCkIOQLLB42PoKrCvehXtjNQY5cGQ6QEUDawPrFY84uch-rZdQQLnP2uCPoDn2yI0sj5J-ryPmG8hWp0ZXF0taJ5ZosIJX8Rcyz75gLiJk95w837-DYYszFpx17aKpPhnYhBlGhsldu0Z4bYZ4P98Qx_ftAPa3AUgFxycKcPduMtEFI1WJNNwFcEZ35ULj9pjPxwoZv0TBFEChuVJNNv8teerstfxqiP45SML-tocsAaRE6tUF7T2UwjPKtqHWAsEJbbd2Eq4cZt5PckKkEIjFi3kl1BdEArDQFwkGGN0H16qjdeAcCgFW6NkJvqC3tz_RYW1vEjlge16fFR8MmaVcfOJ8p5ypKwn82M0_Odw2lqHC94N59yIIAEe_8rvysRLLtNw0jYOxz9ixShptd0OQ8_2dTIPUiuox-yWgm-ORCZvT5icyThQJU7P0Wyl64OZZiUx94IL5gDsjhh9iZq6YPYV6YztG46YNUiARHO8YVOdnUT8vSPNYtWe6YSNvA..&AV_CCPA=1YYY&AVC_DATE=2024-12-03&AV_TITLE=Televen+HD&AV_SECURED=1&AV_CHANNEL_NAME=Televen+HD&AV_DNT=0&AVC_INVIEWPERC=100&AV_DTRACK=1&AV_URL=https%3A%2F%2Fapp.televen.com%2Fplayer%2Ftv%3FchannelId%3D20000841%26categoryId%3D0%26channelNumber%3D1&AV_VIDEOID=20000841&AV_VIDEOURL=https%3A%2F%2Fapp.televen.com%2Fplayer%2Ftv%3FchannelId%3D20000841%26categoryId%3D0%26channelNumber%3D1&AV_SITE_CATEGORY=IAB1-7&AV_LANGUAGE=Sp&AVC_INVIEW=1',

        isLive: true

      },
      
      

      {

        id: 18,

        title: 'Novelisima 🇻🇪',

        url: 'https://novelisima-ottera.akamaized.net/hls/live/2093267/NOVELISIMA_OTTERA/master.m3u8',

        isLive: true

      },
      
      

      {

        id: 19,

        title: 'Novelas Turcas 🇹🇷',

        url: 'https://stream.ads.ottera.tv/playlist.m3u8?network_id=5088',

        isLive: true

      },
      
      

      {

        id: 20,

        title: 'Sony Canal Novelas 🇺🇸',

        url: 'https://1d523b230b48436fa13d0bfa26aa9fb1.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung_SonyCanalNovelas-1/playlist.m3u8?p',

        isLive: true

      },


    ];

    

    this.initializePlayer();

  }

  initializePlayer() {

    // Crear lista de streams

    this.renderStreamList();

    

    // Manejar errores del reproductor

    this.videoElement.addEventListener('error', (e) => {

      console.error('Error en el reproductor:', e);

      this.handlePlayerError();

    });

  }

  renderStreamList() {

    this.streamList.innerHTML = '';

    this.streams.forEach(stream => {

       const streamElement = document.createElement('div');

      streamElement.className = 'stream-item';

      streamElement.innerHTML = `

        ${stream.isLive ? '<span class="live-badge">EN VIVO</span>' : ''}

        <span>${stream.title}</span>

      `;

      

      streamElement.addEventListener('click', () => {

        this.playStream(stream);

      });

      

      this.streamList.appendChild(streamElement);

    });

  }

  playStream(stream) {

    try {

      if (Hls.isSupported()) {

        if (this.hls) {

          this.hls.destroy();

        }

        

        this.hls = new Hls();

        this.hls.loadSource(stream.url);

        this.hls.attachMedia(this.videoElement);

        this.hls.on(Hls.Events.MANIFEST_PARSED, () => {

          this.videoElement.play();

        });

      }

      // Para navegadores que soporten nativamente HLS

      else if (this.videoElement.canPlayType('application/vnd.apple.mpegurl')) {

        this.videoElement.src = stream.url;

        this.videoElement.addEventListener('loadedmetadata', () => {

          this.videoElement.play();

        });

      }

      

      this.currentStream = stream;

      

    } catch (error) {

      console.error('Error al reproducir stream:', error);

      this.handlePlayerError();

    }

  }

  handlePlayerError() {

    // Mostrar mensaje de error amigable

    const errorMessage = document.createElement('div');

    errorMessage.style.position = 'absolute';

    errorMessage.style.top = '50%';

    errorMessage.style.left = '50%';

    errorMessage.style.transform = 'translate(-50%, -50%)';

    errorMessage.style.color = 'white';

    errorMessage.style.textAlign = 'center';

    errorMessage.innerHTML = `

      <p>Lo sentimos, ha ocurrido un error al cargar el stream.</p>

      <p>Por favor, intenta con otro stream o actualiza la página.</p>

    `;

    

    this.videoElement.parentElement.appendChild(errorMessage);

  }

}

// Inicializar el reproductor cuando el documento esté listo

document.addEventListener('DOMContentLoaded', () => {

  const player = new StreamPlayer();

  

  // Cargar script HLS.js desde CDN

  const hlsScript = document.createElement('script');

  hlsScript.src = 'https://cdn.jsdelivr.net/npm/hls.js@latest';

  hlsScript.onload = () => {

    console.log('HLS.js cargado correctamente');

  };

  document.head.appendChild(hlsScript);

});
        
