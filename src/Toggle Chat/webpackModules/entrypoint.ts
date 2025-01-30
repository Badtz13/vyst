import { greeting } from "@moonlight-mod/wp/Toggle Chat_someLibrary";

const logger = moonlight.getLogger("Toggle Chat/entrypoint");
logger.info("Hello from entrypoint!");
logger.info("someLibrary exports:", greeting);

const natives = moonlight.getNatives("Toggle Chat");
logger.info("node exports:", natives);
