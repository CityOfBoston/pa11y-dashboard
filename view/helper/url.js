// This file is part of pa11y-dashboard.
//
// pa11y-dashboard is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// pa11y-dashboard is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with pa11y-dashboard.  If not, see <http://www.gnu.org/licenses/>.

'use strict';

module.exports = helper;

function helper (register) {

	// Simplify url by removing (eg http://, https://, trailing slashes) from url
	register('simplify-url', function (context) {
		var url = context.replace(/^https?:\/\//i, '').replace(/\/$/, '').toLowerCase();
		var n = url.indexOf('@');

		if (n > -1) {
			url = url.split('@')[1]
		}

		return url;
	});

}
