const skills = {
  overall: "overall",
  attack: "attack",
  defence: "defence",
  strength: "strength",
  hitpoints: "hitpoints",
  ranged: "ranged",
  prayer: "prayer",
  magic: "magic",
  cooking: "cooking",
  woodcutting: "woodcutting",
  fletching: "fletching",
  fishing: "fishing",
  firemaking: "firemaking",
  crafting: "crafting",
  smithing: "smithing",
  mining: "mining",
  herblore: "herblore",
  agility: "agility",
  thieving: "thieving",
  slayer: "slayer",
  farming: "farming",
  runecrafting: "runecrafting",
  hunter: "hunter",
  construction: "construction"
};

const minigames = {
  easyClueScrolls: "easyClueScrolls",
  mediumClueScrolls: "mediumClueScrolls",
  clueScrolls: "clueScrolls",
  bountyHunter: "bountyHunter",
  bountyHunterRogues: "bountyHunterRogues",
  hardClueScrolls: "hardClueScrolls",
  lastManStanding: "lastManStanding",
  eliteClueScrolls: "eliteClueScrolls",
  masterClueScrolls: "masterClueScrolls"
};

const playerTypes = {
  normal: "normal",
  ironman: "ironman",
  ultimateIronman: "ultimate",
  hardcoreIronman: "hardcore_ironman",
  deadman: "deadman",
  seasonal: "seasonal"
};

const hiscoreSkillEntryOrder = [
  skills.overall,
  skills.attack,
  skills.defence,
  skills.strength,
  skills.hitpoints,
  skills.ranged,
  skills.prayer,
  skills.magic,
  skills.cooking,
  skills.woodcutting,
  skills.fletching,
  skills.fishing,
  skills.firemaking,
  skills.crafting,
  skills.smithing,
  skills.mining,
  skills.herblore,
  skills.agility,
  skills.thieving,
  skills.slayer,
  skills.farming,
  skills.runecrafting,
  skills.hunter,
  skills.construction
];

const hiscoreMinigameEntryOrder = [
  minigames.easyClueScrolls,
  minigames.mediumClueScrolls,
  minigames.clueScrolls,
  minigames.bountyHunter,
  minigames.bountyHunterRogues,
  minigames.hardClueScrolls,
  minigames.lastManStanding,
  minigames.eliteClueScrolls,
  minigames.masterClueScrolls
];

const ingameSkillOrder = [
  skills.attack,
  skills.hitpoints,
  skills.mining,
  skills.strength,
  skills.agility,
  skills.smithing,
  skills.defence,
  skills.herblore,
  skills.fishing,
  skills.ranged,
  skills.thieving,
  skills.cooking,
  skills.prayer,
  skills.crafting,
  skills.firemaking,
  skills.magic,
  skills.fletching,
  skills.woodcutting,
  skills.runecrafting,
  skills.slayer,
  skills.farming,
  skills.construction,
  skills.hunter,
  skills.overall
];

exports.skills = skills;
exports.minigames = minigames;
exports.hiscoreSkillEntryOrder = hiscoreSkillEntryOrder;
exports.hiscoreMinigameEntryOrder = hiscoreMinigameEntryOrder;
exports.ingameSkillOrder = ingameSkillOrder;
exports.playerTypes = playerTypes;
