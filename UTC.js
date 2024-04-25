const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const channel = getChannel(computedAppVersion);
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());