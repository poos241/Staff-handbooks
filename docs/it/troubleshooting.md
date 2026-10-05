# Troubleshooting

## Bot is offline

1. Check if it's just slow (Discord outages happen) — check [Discord status](https://discordstatus.com).
2. If self-hosted, check the host machine / process.
3. Restart the bot if you have access; escalate to the bot owner if not.
4. Post in `#it-support` so staff know it's being handled.

## Bot isn't responding to commands

- Check its role is above the roles it needs to manage.
- Check channel permissions — can it read/send in that channel?
- Check the bot has the required intents/privileges enabled.
- Look at logs for errors.

## Permissions look wrong

- Role hierarchy: higher roles override lower ones. Verify order in Server Settings → Roles.
- Channel overwrites beat role permissions. Check the channel's permission overrides.
- When in doubt, use "View Server As Role" to test.

## Someone can't see a channel

1. Check they have the required role.
2. Check channel permission overwrites.
3. Check the role hierarchy isn't blocking them.

## Event tech issues (VRChat)

- Instance full? Create an overflow instance and link it.
- Crasher with a malicious avatar? Security should block + report; document the user ID.
- World broken? Have a backup world ready — > **TODO:** list backup worlds.

## Escalation

If you can't fix it in 15 minutes during an event, escalate to the IT lead and post in `#it-support`. Don't suffer in silence — the event matters more than your pride.
