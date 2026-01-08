# About

This is Next JS + Keystatic

Nothing special

## Tool

### Generate CHANGELOG.md

```bash
# Add git config once
git config --global alias.journal '!git log --date=short --pretty=format:"- [%ad] %s" --since="24.hours.ago" >> CHANGELOG.md && echo "Added recent work to CHANGELOG.md"'

# Then just use this to generate it
git journal
```
