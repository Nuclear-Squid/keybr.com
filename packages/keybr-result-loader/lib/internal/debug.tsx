import { ErrorAlert } from "@keybr/debug";

/**
 * Database errors are recoverable. This handler will show a friendly
 * error message, but will not crash the application.
 */
export function catchError(error: unknown) {
  console.error(error);
  ErrorAlert.toast(
    <>
      <p>On ho! Database error!</p>
      <p>This is likely a temporary problem and will be resolved soon.</p>
    </>,
    error,
  );
}
