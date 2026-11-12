const launch = document.querySelector("[data-trailer]");
const frame = launch.parentElement;
const errorMessage = document.querySelector(".trailer-error");

function openTrailer(event) {
  if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
  event.preventDefault();

  const player = document.createElement("video");
  player.controls = true;
  player.playsInline = true;
  player.poster = launch.querySelector("img").currentSrc;
  player.setAttribute("aria-label", "Cluckworks gameplay trailer");

  const captions = document.createElement("track");
  captions.kind = "captions";
  captions.label = "English";
  captions.srclang = "en";
  captions.src = launch.dataset.captions;
  player.append(captions);
  player.src = launch.href;

  player.addEventListener("error", () => {
    frame.replaceChildren(launch);
    errorMessage.hidden = false;
    launch.focus();
  }, { once: true });

  errorMessage.hidden = true;
  frame.replaceChildren(player);
  player.focus();
  // Native controls remain usable if the browser declines programmatic playback.
  player.play().catch(() => {});
}

launch.setAttribute("role", "button");
launch.addEventListener("click", openTrailer);
launch.addEventListener("keydown", event => {
  if (event.key === " ") openTrailer(event);
});
