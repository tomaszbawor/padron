class DelayedTask {
  private timeoutID: NodeJS.Timeout | null = null
  private startTime: number
  private endTime: number
  private duration: number

  constructor(durationInSeconds: number, private onProgress: (percentage: number) => void, private onComplete: () => void) {
    this.duration = durationInSeconds * 1000 // convert to milliseconds
    this.startTime = Date.now()
    this.endTime = this.startTime + this.duration
  }

  public start() {
    if (!this.timeoutID)
      this.tick()
  }

  private tick() {
    const now = Date.now()
    const elapsed = now - this.startTime
    const percentage = Math.min(100, (elapsed / this.duration) * 100)
    this.onProgress(percentage)

    if (percentage < 100) {
      // Schedule the next tick
      const nextTickDuration = Math.min(100, this.duration - elapsed)
      this.timeoutID = setTimeout(() => this.tick(), nextTickDuration)
    }
    else {
      this.onComplete()
    }
  }

  public cancel() {
    if (this.timeoutID) {
      clearTimeout(this.timeoutID)
      this.timeoutID = null
    }
  }
}
