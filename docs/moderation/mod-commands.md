---
sidebar_position: 3
---

# Mod Commands

## Mod Command Rules

- **Only use the mod commands you are granted permission to use**, and know how to use.
- **Do not run commands outside dedicated mod command channels**, such as `#mod-commands`, or within the relevant ticket.
- **Always provide a reason**, where applicable, for any mod command you run.
- **Do not use mod commands that could disrupt the server** in any way, whether intentional or not.
- **Do not test mod commands** unless given permission by the Head Moderator in a controlled, supervised setting.

:::danger When in doubt, don't run it

Only use mod commands when you are **absolutely sure** it is the correct action to take, given the situation, the available evidence, and your own judgment.
:::

## Additional Command Guidelines

### Do

- If bots or the server aren't functioning correctly — even if you think it's a known issue — add it to `#to-do-list` if it isn't already there.
- If you ban a troll, check server invites and delete any they've made, in case others joined using them. Go to **Server Settings → Invites**.
- If asking a user to delete or edit a message, consider making the request in a ticket to avoid clogging the discussion thread. If you ask in-channel, delete the messages afterwards.

### Do if you want to

- Delete off-topic or misplaced messages in `#vrc-names`, `#introduce-yourself`, and `#dm-request` as needed to keep things tidy.
- Run `/scan-introduction-channel` and delete any duplicate introductions.

## Commands to Be Aware Of

### 🎫 Tickets

| Command | What it does |
|---|---|
| `/open` | Opens a ticket (or use the button in `#open-a-ticket`). Remember to **claim** the ticket. |
| `/rename` | Rename the ticket — e.g. `warning-username`. Use within the ticket. |
| `/add @user` | Adds a user to the ticket. |
| `/remove @user` | Removes a user you added temporarily (e.g. another mod). |
| `/close request` | Request to close — consider using instead of asking manually. |
| `/reopen :ticketID` | Reopens a closed ticket if needed. |
| `/transfer` | Transfers the ticket to another moderator if necessary. |
| `/remindme :time` | Set reminders for user responses or follow-ups. *(Dyno bot)* |

### 🔨 Moderation

| Command | What it does |
|---|---|
| `/ban :reason @user` | Bans a user. **Always include a reason.** |
| `/unban userID :reason` | Unbans a user. |
| `/kick @user :reason` | Kicks a user — e.g. if their account is compromised or they are under 16. **Always include a reason.** |
| `/warn :reason @user/ID` | Issues a warning. Be clear and objective. |
| `/infwarn @user :reason` | Issues an informal warning, for less severe infractions. |
| `/timeout @user :time :preset :reason` | Times out a user for a set length. **Always include a reason.** |
| `/modlogs @user/ID :type :before :after` | Views a user's modlogs, with optional filters. |
| `/modlogs-edit @user/ID` | Edits a user's modlogs. |
| **Muted Role** | Mutes a user everywhere except in tickets, so you can still discuss things with them if needed. |

:::info Case numbers

Case numbers increment per action — e.g. `Case # ^` means the action is logged as **Case #1**.
:::
