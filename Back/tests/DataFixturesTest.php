<?php

namespace App\Tests;

use App\DataFixtures\AppFixtures;
use App\Entity\Cart;
use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\TestCase;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class DataFixturesTest extends KernelTestCase
{
    protected function setUp(): void
    {
        parent::setUp();
        exec("php bin/console doctrine:database:drop --env=test --force");
        exec("php bin/console doctrine:database:create --env=test");
        exec("php bin/console doctrine:migration:migrate -n --env=test");
    }

    public function testCart()
    {
        self::bootKernel();

        $container = static::getContainer();

        $appFixtures = $container->get(AppFixtures::class);
        $objectManager = $container->get(EntityManagerInterface::class);
        $appFixtures->load($objectManager);

        $this->assertTrue(true);
    }
}
