/**
*Represents a detected pointer gesture.
*/
export type PointerAction = 'press' | 'hold' | 'drag' | 'scroll';

/**
*Represents the result of a completed pointer gesture.
*/
export interface PointerResult {
  action: PointerAction;
  deltaX: number;
  deltaY: number;
  duration: number;
}

/**
*Detects press, hold, drag and scroll pointer gestures.
*/
export class PointerGesture {
  private readonly dragThreshold = 12;
  private readonly holdDuration = 450;

  private pointerId: number | null = null;
  private startX = 0;
  private startY = 0;
  private startTime = 0;
  private action: PointerAction = 'press';

  /**
  *Starts tracking a primary pointer interaction.
  *@param event - The pointer event.
  */
  press(event: PointerEvent): void {
    if (this.pointerId !== null || !event.isPrimary) return;
    if (event.pointerType === 'mouse' && event.button !== 0) return;

    this.pointerId = event.pointerId;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.startTime = event.timeStamp;
    this.action = 'press';
  }

  /**
  *Classifies the current pointer movement.
  *@param event - The pointer event.
  *@returns The current gesture or null.
  */
  move(event: PointerEvent): PointerAction | null {
    if (event.pointerId !== this.pointerId) return null;
    if (this.action === 'drag' || this.action === 'scroll') return this.action;

    const deltaX = Math.abs(event.clientX - this.startX);
    const deltaY = Math.abs(event.clientY - this.startY);

    if (Math.max(deltaX, deltaY) < this.dragThreshold) return this.action;
    this.action = deltaX > deltaY ? 'drag' : 'scroll';
    return this.action;
  }

  /**
  *Completes a pointer interaction and returns its result.
  *@param event - The pointer event.
  *@returns The completed gesture or null.
  */
  release(event: PointerEvent): PointerResult | null {
    if (event.pointerId !== this.pointerId) return null;

    const action = this.move(event);
    const duration = event.timeStamp - this.startTime;
    const result: PointerResult = {
      action: action === 'press' && duration >= this.holdDuration
        ? 'hold' : action ?? 'press',
      deltaX: event.clientX - this.startX,
      deltaY: event.clientY - this.startY,
      duration,
    };

    this.cancel();
    return result;
  }

  /**
  *Cancels the current pointer gesture.
  */
  cancel(): void {
    this.pointerId = null;
    this.action = 'press';
  }
}