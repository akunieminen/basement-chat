import type { AlpineComponent } from "alpinejs";
import Push from "push.js";
import { delegate, type Instance, type ReferenceElement } from "tippy.js";
import NotificationStatus from "../enums/notification-status";
import type { ChatBoxComponent } from "../types/components";
import type { PushNotificationEvent } from "../types/events";

export default (): AlpineComponent<ChatBoxComponent> => ({
  isMinimized: true,
  isExpanded: false,
  isLauncherShown: true,
  isContactOpened: true,
  isMessageBoxOpened: false,
  isNotificationAllowed:
    window.localStorage.getItem("basement.notification") ===
    NotificationStatus.Allowed,
  hasNotificationPermission: Push.Permission.has(),
  online: true,
  totalUnreadMessages: 0,

  /**
   * Hook during the initialization phase of the current Alpine component.
   */
  init(): void {
    window.addEventListener("online", (): void => {
      this.online = true;
    });

    window.addEventListener("offline", (): void => {
      this.online = false;
    });

    // Opening, the launcher fades out while the window grows over it (the corner is never empty). Minimizing, the box
    // keeps its open size until the window has shrunk back into the launcher (its 200 ms leave), so the window has room
    // to leave the way it came; the launcher fades in under the window's last 80 ms.
    this.$watch("isMinimized", (minimized: boolean): void => {
      if (!minimized) {
        this.isExpanded = true;
        this.isLauncherShown = false;
        return;
      }
      setTimeout((): void => {
        if (this.isMinimized) this.isLauncherShown = true;
      }, 120);
      setTimeout((): void => {
        if (this.isMinimized) this.isExpanded = false;
      }, 200);
    });

    this.$watch(
      "isNotificationAllowed",
      this.watchNotificationStatus.bind(this),
    );
    this.$el.addEventListener(
      "send-push-notification",
      this.sendPushNotification.bind(this),
    );

    this.registerTippy();
  },

  /**
   * Request push notification permission to the browser.
   */
  requestNotificationPermission(): void {
    Push.Permission.request(
      (): void => {
        this.isNotificationAllowed = true;
        this.hasNotificationPermission = true;
      },
      (): void => {
        this.hasNotificationPermission = false;
      },
    );
  },

  /**
   * Send push notification permission to the browser if allowed.
   */
  sendPushNotification(event: CustomEvent<PushNotificationEvent>): void {
    if (this.isNotificationAllowed === false) {
      return;
    }

    void Push.create(event.detail.title, {
      body: event.detail.body,
      icon: event.detail.icon,
      timeout: 4000,
      onClick(this: Notification): void {
        window.focus();
        this.close();
      },
    });
  },

  /**
   * Register tippy.js instance creation for child elements.
   */
  registerTippy(): void {
    delegate(this.$el, {
      animation: "fade",
      delay: [200, 0],
      duration: [150, 100],
      arrow: true,
      target: ".basement [data-title]",
      onShow(instance: Instance): void {
        const title: string | null =
          instance.reference.getAttribute("data-title");

        if (title !== null) {
          instance.setContent(title);
        }
      },
    });

    // A view change takes the tooltip's anchor away at once (the launcher, the minimized card, the swapped header): its
    // tooltip goes with it instead of fading out over nothing. unmount, not hideAll: the click's mousedown has already
    // started the clicked button's fade, which hideAll skips.
    for (const view of [
      "isMinimized",
      "isContactOpened",
      "isMessageBoxOpened",
    ]) {
      this.$watch(view, (): void => {
        this.$el
          .querySelectorAll<ReferenceElement>("[data-title]")
          .forEach((el): void => el._tippy?.unmount());
      });
    }
  },

  /**
   * Watch when the notification status changes.
   */
  watchNotificationStatus(newValue: boolean): void {
    const status: NotificationStatus =
      newValue === true ? NotificationStatus.Allowed : NotificationStatus.Muted;

    window.localStorage.setItem("basement.notification", status);
  },
});
