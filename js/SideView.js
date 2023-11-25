AFRAME.registerComponent("place-side-view", {
  init: function() {
    this.createPlaces();
  },
  tick: function() {
    const placesContainer = document.querySelector("#places-container");

    const { state } = placesContainer.getAttribute("tour");

    if (state === "view" || state === "change-view") {

      this.el.setAttribute("visible", true);
    } else {
      this.el.setAttribute("visible", false);
    }
  },
  createPlaces: function() {
    const sideViewContainer = document.querySelector(
      "#side-view-container"
    );

    let prevoiusXPosition = -150;
    let prevoiusYPosition = 30;

    for (var i = 1; i <= 4; i++) {
      const position = {
        x: (prevoiusXPosition += 50),
        y: (prevoiusYPosition += 2),
        z: -40
      };
      const entityEl = this.createPlaceThumbNail(position, i);
      const backEl = this.backButton();
      sideViewContainer.appendChild(entityEl);
      sideViewContainer.appendChild(backEl)
    }
  },
  createPlaceThumbNail: function(position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("id", `place-${id}`);

    entityEl.setAttribute("geometry", {
      primitive: "circle",
      radius: 2.5
    });

    entityEl.setAttribute("material", {
      src: "./assets/helicopter.png",
      opacity: 0.9
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("cursor-listener", {});

    return entityEl;
  },

  backButton: function(){
    const el = document.createElement("a-entity");
    el.setAttribute("visible", true);
    el.setAttribute("id", "back");
    el.setAttribute("geometry", {primitive: "circle", radius: 5});
    el.setAttribute("material", {src: "./assets/back.png", opacity: 1})

    el.setAttribute("position", {x: -100, y: 100, z: -40})
    el.setAttribute("cursor-listener", {})

    return el;
  }
});
