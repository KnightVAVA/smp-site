 const mods = [
    {
      name: "fabric api",
      category: "core",
      type: "server-side",
      description:
        "foundation mod required for all other fabric mods to function. provides essential hooks and apis for mod development.",
    },
    {
      name: "almanac",
      category: "library",
      type: "server-side",
      description: "library mod for let me despawn.",
    },
    {
      name: "let me despawn",
      category: "performance",
      type: "server-side",
      description:
        "improves performance by tweaking mob despawn rules. say bye to pesky unintentional persistent mobs.",
    },
    {
      name: "always shield",
      category: "gameplay",
      type: "server-side",
      description:
        "removes the obnoxious block delay of the shield, so it works the moment you press right-click. no more delay and confusion",
    },
    {
      name: "simple voice chat",
      category: "social",
      type: "optional client",
      description:
        "proximity-based voice chat with 3d positional audio. players can talk to nearby players naturally. works even if some players don't install it.",
    },
    {
      name: "lithium",
      category: "performance",
      type: "server-side",
      description: "no-compromises game logic optimization mod.",
    },
    {
      name: "balm",
      category: "library",
      type: "server-side",
      description: "abstraction layer for multi-loader mods",
    },
    {
      name: "lithostitched",
      category: "library",
      type: "server-side",
      description:
        "library mod with new configurability and compatibility enhancements for worldgen",
    },
    {
      name: "banner hats",
      category: "cosmetic",
      type: "server-side",
      description:
        "make banners wearable in the helmet slot, just like for pillagers",
    },
    {
      name: "luckperms",
      category: "admin",
      type: "server-side",
      description: "a permissions plugin/mod for minecraft servers.",
    },
    {
      name: "collective",
      category: "library",
      type: "server-side",
      description: "library with common code.",
    },
    {
      name: "moonrise",
      category: "performance",
      type: "server-side",
      description: "optimisation mod for the dedicated/integrated server.",
    },
    {
      name: "disable dimensions",
      category: "admin",
      type: "server-side",
      description:
        "a hard-to-break, grief-resistant solution for preventing players from entering the end.",
    },
    {
      name: "no chat reports",
      category: "social",
      type: "server-side",
      description: "makes chat unreportable",
    },
    {
      name: "easyauth",
      category: "Utility",
      type: "Server-side",
      description: "Authentication mod for Fabric servers",
    },
    {
      name: "EasyWhitelist",
      category: "Utility",
      type: "Server-side",
      description: "Name-based whitelist for Fabric servers",
    },
    {
      name: "Fabric language Kotlin",
      category: "Core",
      type: "Server-Side",
      description:
        "Enables usage of the Kotlin programming language for Fabric mods.",
    },
    {
      name: "Serversleep",
      category: "Utility",
      type: "Server-side",
      description: "Changes playersSleepingPercentage to 1%",
    },
    {
      name: "Servercore",
      category: "Performance",
      type: "Server-side",
      description: "A mod that aims to optimize the minecraft server.",
    },
    {
      name: "fabric permissions",
      category: "Library",
      type: "Server-side",
      description: "A simple permissions API for Fabric.",
    },
    {
      name: "Spark",
      category: "Admin",
      type: "Server-side",
      description:
        "Performance profiler for Minecraft clients, servers and proxies.",
    },
    {
      name: "Polymer",
      category: "Library",
      type: "Server-side",
      description: "Library for creating better server side content!",
    },
    {
      name: "Fast Backups",
      category: "Utility",
      type: "Server-side",
      description: "Fast, incremental world backups powered by Git. ",
    },
    {
      name: "Tectonic",
      category: "World Generation",
      type: "Server-side",
      description:
        "Terrain shaping brought to new heights, grander and more varied than ever before!",
    },
    {
      name: "FerriteCore",
      category: "Performance",
      type: "Server-side",
      description: "Memory usage optimizations",
    },
    {
      name: "Tree Harvester",
      category: "Utility",
      type: "Server-side",
      description:
        "Harvest full trees and huge mushrooms instantly with an axe. Shift+right-click the base block of a tree to fell the entire tree at once.",
    },
    {
      name: "Fsit",
      category: "Social",
      type: "Server-side",
      description: "Sit anywhere! Enter /sit or /crawl",
    },
    {
      name: "Voice Chat Interaction",
      category: "Gameplay",
      type: "Server-side",
      description: "Voice chat skulk sensor activation and warden detection",
    },
    {
      name: "Image2Map",
      category: "Cosmetic",
      type: "Server-side",
      description:
        "Turn images into maps! Visit the modpage to see usage instructions.",
    },
    {
      name: "Krypton",
      category: "Performance",
      type: "Server-side",
      description: "A mod to optimize the Minecraft networking stack",
    },
    {
      name: "Welcome Message",
      category: "Social",
      type: "Server-side",
      description:
        "Easy to configure welcome messages for server players logging in with URL support.",
    },
    {
      name: "Ledger",
      category: "Admin",
      type: "Server-side",
      description: "Comprehensive logging system for Fabric servers",
    },
    {
      name: "Simple Voice Chat Enhanced groups",
      category: "Social",
      type: "Server-side",
      description:
        "Provides useful commands and features to Simple Voice Chat groups.",
      isNew: true,
    },
    {
      name: "Skin Shuffle",
      category: "Social",
      type: "Optional Client",
      description: "Allows changing skins withouht leaving the server",
      isNew: true,
    },
    {
      name: "SpeedyGhast",
      category: "Gameplay",
      type: "Server-side",
      description: "Faster Happy Ghast Flight with Soul Speed Boots",
      isNew: true,
    },
  ];

export default mods; 
