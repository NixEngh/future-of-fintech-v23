-- CreateTable
CREATE TABLE "Provider" (
    "providerId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PricingModel" (
    "pricingId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "providerId" INTEGER NOT NULL,
    CONSTRAINT "PricingModel_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Provider" ("providerId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PricingParameter" (
    "pricingParametersId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "pricingModelId" INTEGER NOT NULL,
    CONSTRAINT "PricingParameter_pricingModelId_fkey" FOREIGN KEY ("pricingModelId") REFERENCES "PricingModel" ("pricingId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "userId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT
);

-- CreateTable
CREATE TABLE "ConsumptionUnit" (
    "consumptionUnitId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "from" DATETIME NOT NULL,
    "to" DATETIME NOT NULL,
    "consumption" REAL NOT NULL,
    "unit" TEXT NOT NULL,
    CONSTRAINT "ConsumptionUnit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
