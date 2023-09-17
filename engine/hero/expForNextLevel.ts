export default function experienceNeededForNextLevel(currentLevel: number): number {
  const baseExp = 1000
  const doubleEveryXLevels = 10

  const fullDoubles = Math.floor((currentLevel - 1) / doubleEveryXLevels)
  const remainderLevels = (currentLevel - 1) % doubleEveryXLevels

  const baseForCurrentLevel = baseExp * 2 ** fullDoubles
  const increment = baseForCurrentLevel / doubleEveryXLevels

  return Math.round(baseForCurrentLevel + increment * remainderLevels)
}
