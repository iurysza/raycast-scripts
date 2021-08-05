#!/usr/bin/osascript

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Shut Down
# @raycast.mode silent
# @raycast.packageName System
# @raycast.needsConfirmation true

# Optional parameters:
# @raycast.icon 🛌

# Documentation:
# @raycast.description Shuts down computer.

tell application "Finder" to shut down