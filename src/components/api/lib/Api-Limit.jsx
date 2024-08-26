import { auth } from "@clerk/clerk-react";
import Prismadb from "./Prismadb";
import { MAX_FREE_COUNTS } from "../../../../constants";

export const increaseApiLimit = async () => {
    const { userId } = auth();

    if (!userId) {
        return;
    }

    const userApiLimit = await Prismadb.userApiLimit.findUnique({
        where: {
            userId
        }
    });

    if (userApiLimit) {
        await Prismadb.userApiLimit.update({
            where: { userId: userId },
            data: { count: userApiLimit.count + 1 },
        });
    } else {
        await Prismadb.userApiLimit.create({
            data: { userId: userId, count: 1 }
        });
    }
};

export const checkApiLimit = async () => {
    const { userId } = auth();

    if (!userId) {
        return false;
    }

    const userApiLimit = await Prismadb.userApiLimit.findUnique({
        where: {
            userId: userId
        }
    });

    return !userApiLimit || userApiLimit.count < MAX_FREE_COUNTS;
};
