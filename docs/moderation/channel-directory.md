---
sidebar_position: 7
---

# Channel & Role Directory

> **TODO for leads:** this page needs your server's real channel links and role names.
> Replace every `GUILD_ID` / `CHANNEL_ID` below with the actual IDs
> (right-click the channel in Discord → Copy Channel ID with Developer Mode on),
> and adjust the role columns to match your server's roles.
>
> The links use Discord's `discord://` deep-link format, so they open directly in
> the **Discord desktop app** instead of the browser. If someone doesn't have the
> app installed, the link won't do anything — the browser fallback is the same
> address with `discord://-/` swapped for `https://discord.com/`.

## Key channels

| Channel | Purpose | Link |
|---|---|---|
| `#mod-commands` | Run all moderation commands here | [Open](discord://-/channels/GUILD_ID/CHANNEL_ID) |
| `#open-a-ticket` | Members open tickets via the button here | [Open](discord://-/channels/GUILD_ID/CHANNEL_ID) |
| `#to-do-list` | Report broken bots / server issues here | [Open](discord://-/channels/GUILD_ID/CHANNEL_ID) |
| `#evidence-for-logs` | Screenshots of punished interactions + user IDs | [Open](discord://-/channels/GUILD_ID/CHANNEL_ID) |
| `#vrc-names` | Tidy off-topic messages as needed | [Open](discord://-/channels/GUILD_ID/CHANNEL_ID) |
| `#introduce-yourself` | Tidy misplaced messages; dedupe with `/scan-introduction-channel` | [Open](discord://-/channels/GUILD_ID/CHANNEL_ID) |
| `#dm-request` | Tidy off-topic messages as needed | [Open](discord://-/channels/1318042499784249415/1318143158982414346) |

## Who can do what

Starting guess based on the handbook — **correct this to match your actual permissions.**

| Action | Trial Mod | Moderator | Head Moderator |
|---|---|---|---|
| Run mod commands in `#mod-commands` | ❓ | ✅ | ✅ |
| Issue informal warnings (`/infwarn`) | ❓ | ✅ | ✅ |
| Issue formal warnings (`/warn`) | ❌ | ✅ | ✅ |
| Issue timeouts | ❌ | ✅ | ✅ |
| Kick users | ❌ | ✅ | ✅ |
| Ban users | ❌ | ✅ | ✅ |
| View / edit modlogs | ❓ | ✅ view | ✅ view + edit |
| Test mod commands | ❌ | ❌ (Head Mod approval only) | ✅ |
| Moderate another staff member | ❌ | ❌ (supervisor only) | ❌ (supervisor only) |
| Close another mod's ticket | ❌ | ❌ (attending mod only) | ❌ (attending mod only) |
| Rename own tickets | ✅ | ✅ | ✅ |
| Post public ban announcements | ❌ | ✅ | ✅ |

Legend: ✅ allowed · ❌ not allowed · ❓ confirm with your leads

:::warning Keep this page honest

If the matrix above doesn't match reality, it becomes worse than useless — fix it the moment roles or permissions change, and note the change in [Handbook Updates](/updates).
:::
