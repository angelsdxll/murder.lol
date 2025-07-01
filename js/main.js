var _____WB$wombat$assign$function_____ = function(name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function(obj) {
        this.__WB_source = obj;
        return this;
    }
}
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    let currentMember = null;
    const defaultSong = "socials/bedtup.mp3";

    function showMember(member) {
        const memberInfo = {
            'net': {
                'name': 'Net',
                'image': 'imgs/net.png',          // replace with actual
                'description': 'the true don,',
                'song': 'socia3'
            },
            'dorm': {
                'name': 'Dorm',
                'image': 'imgs/resist.gif',         // replace with actual
                'description': 'brrrppr meow meow',
                'song': 'socials/resist.mp3'
            },
            'tragic': {
                'name': 'Tragic',
                'image': 'imgs/tragic.png',       // replace with actual
                'description': 'still alive',
                'song': 'socials/tragic.mp3'
            },
            'sim': {
                'name': 'Sim',
                'image': 'imgs/sim.png',          // replace with actual
                'description': 'band man ',
                'song': 'socials/sim.mp3'
            }
        };

        const info = memberInfo[member];
        if (!info) return;

        const memberDiv = document.getElementById('member-info');
        const selectedElement = document.querySelector(`[onclick="showMember('${member}')"]`);

        if (currentMember === selectedElement) {
            currentMember.style.color = '';
            document.getElementById(`${currentMember.getAttribute('data-member')}-dot`).innerHTML = '::';
            memberDiv.innerHTML = '';
            currentMember = null;
            playDefaultSong();
            return;
        }

        if (currentMember) {
            currentMember.style.color = '';
            document.getElementById(`${currentMember.getAttribute('data-member')}-dot`).innerHTML = '::';
        }

        selectedElement.style.color = '#440202';  // your highlight color
        currentMember = selectedElement;
        selectedElement.setAttribute('data-member', member);

        document.querySelectorAll('.yellow').forEach(dot => {
            dot.innerHTML = '::';
        });

        document.getElementById(`${member}-dot`).innerHTML = '<span style="color: #440202; margin-top: -2px;">&bull;</span>';

        memberDiv.innerHTML = `
            <img src="${info.image}" class="fade-in" style="height: 120px;" draggable="false" >
            <p style="margin-top: 5px; margin-bottom: 0; color: #440202;">[ ${info.name} ]</p>
            <hr style="border-top: 1px solid #440202; margin: 3px 0;">
            <p class="glitch" style="margin-top: 5px;">${info.description}</p>
        `;

        if (info.song) changeSong(info.song);
    }

    function changeSong(url) {
        const audio = document.getElementById('bg-audio');
        if(audio) {
            audio.src = url;
            audio.play();
        }
    }

    function playDefaultSong() {
        changeSong(defaultSong);
    }

    document.addEventListener('DOMContentLoaded', function () {
        const audio = document.getElementById('bg-audio');
        if(audio) {
            audio.volume = 0.05;
            audio.src = defaultSong;
            audio.play();
        }
    });
}
function removeOverlay() {
  const overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.style.display = 'none';  // Hide the overlay
  }
  // Start playing audio after user interaction
  const audio = document.querySelector('audio');
  if (audio) {
    audio.volume = 0.05;
    audio.play().catch(() => {
      // Handle any play errors, like autoplay restrictions
      console.log("Audio play failed - user interaction required");
    });
  }
}
