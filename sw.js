self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("upi-cache").then(c =>
      c.addAll(["/index.html"])
    )
  );
});
