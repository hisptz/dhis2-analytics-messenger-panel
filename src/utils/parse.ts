import ParseServer from "parse/node";
import ParseClient from "parse";

export function initializeServerParse() {

		const serverUrl = process.env.NEXT_JS_BASE_URL ?? "http://localhost:4000";
		const appId = process.env.NEXT_JS_APP_ID ?? "DAM-AUTH";


		ParseServer.initialize(appId);
		ParseServer.serverURL = serverUrl;


}

export function initializeClientParse() {
		const serverUrl = process.env.NEXT_JS_BASE_URL ?? "http://localhost:4000";
		const appId = process.env.NEXT_JS_APP_ID ?? "DAM-AUTH";


		ParseClient.initialize(appId);
		ParseClient.serverURL = serverUrl;
}
