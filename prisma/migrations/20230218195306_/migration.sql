/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ConsumptionUnit" (
    "consumptionUnitId" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "from" DATETIME NOT NULL,
    "to" DATETIME NOT NULL,
    "consumption" REAL NOT NULL,
    "unit" TEXT NOT NULL,
    CONSTRAINT "ConsumptionUnit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ConsumptionUnit" ("consumption", "consumptionUnitId", "from", "to", "unit", "userId") SELECT "consumption", "consumptionUnitId", "from", "to", "unit", "userId" FROM "ConsumptionUnit";
DROP TABLE "ConsumptionUnit";
ALTER TABLE "new_ConsumptionUnit" RENAME TO "ConsumptionUnit";
CREATE TABLE "new_User" (
    "userId" TEXT NOT NULL PRIMARY KEY
);
INSERT INTO "new_User" ("userId") SELECT "userId" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE TABLE "new__RoleToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_RoleToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Role" ("roleId") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_RoleToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("userId") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__RoleToUser" ("A", "B") SELECT "A", "B" FROM "_RoleToUser";
DROP TABLE "_RoleToUser";
ALTER TABLE "new__RoleToUser" RENAME TO "_RoleToUser";
CREATE UNIQUE INDEX "_RoleToUser_AB_unique" ON "_RoleToUser"("A", "B");
CREATE INDEX "_RoleToUser_B_index" ON "_RoleToUser"("B");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
