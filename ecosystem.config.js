module.exports = {
    apps: [
      {
        name: "ssl",
        cwd: "./ssl",
        script: "npm",
        args: "start",
        autorestart: true,
        watch: false,
        max_memory_restart: "1G",
      },
      // {
      //   name: "server",
      //   cwd: "./server",
      //   script: "npm",
      //   args: "start",
      //   autorestart: true,
      //   watch: false,
      //   max_memory_restart: "1G",
      // },
    ],
  }
  